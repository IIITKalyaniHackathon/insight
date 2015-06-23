niclabs.insight.map.grid.Grid = (function() {
	/**
	 * Returns a function to calculate the fill as the interpolation on the average between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.Grid~fill} average function
	 */
	function averageFill(start_rgb, end_rgb) {
		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var avg = 0;
			var size = 0;

			for (i = 0; i < points.length; i++) {
				if ('weight' in points[i]) {
					avg += points[i].weight;
					size++;
				}
			}

			// Calculate average
			if (size > 0) {
				avg = avg / size;
				return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(avg, 1, start_rgb, end_rgb));
			}

			return '#ffffff';
		};
	}

	/**
	 * Returns a function to calculate the fill by category described in colorMap
	 *
	 * @param {Object} colorMap - color map describing the each category color
	 * @return {niclabs.insight.map.grid.Grid~fill} category function
	 */
	function categoryFill(colorMap) {

		return function(points) {
			var size = 0;

			hist = {};

			for (i = 0; i < points.length; i++) {
				if ('weight' in points[i] && 'category' in points[i]) {
					if (points[i].category in hist) {
						hist[points[i].category] += points[i].weight;
					} else {
						hist[points[i].category] = points[i].weight;
					}
					size++;
				}
			}

			var sortable = [];
			for (var value in hist)
			      sortable.push([value, hist[value]]);
			sortable.sort(function(a, b) {return b[1] - a[1];});

			if (size > 0) {
				return colorMap[sortable[0][0]];
			}

			return '#ffffff';
		};
	}

	/**
	 * Returns a function to calculate the fill as the interpolation on the median between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.Grid~fill} median function
	 */
	function medianFill(start_rgb, end_rgb) {
		function partition(data, i, j) {
	        var pivot = Math.floor((i+j)/2);
	        var temp;
	        while(i <= j){
	            while(data[i].weight < data[pivot].weight)
	                i++;
	            while(data[j].weight > data[pivot].weight)
	                j--;
	            if(i <= j){
	                temp = data[i];
	                data[i]=data[j];
	                data[j] = temp;
	                i++;
					j--;
	            }
	        }
	        return pivot;
	    }

		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var median = 0;
			var left = 0, right = points.length > 0 ? points.length - 1: 0;
	        var mid = Math.floor((left + right) / 2);
	        median = partition(points, left, right);
	        while (median !== mid) {
	            if(median < mid)
	                median = partition(points, mid, right);
	            else median = partition(points, left, mid);
	        }

			return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(points[median].weight, 1, start_rgb, end_rgb));
		};
	}

	/**
     * Data point for a grid
     *
     * @typedef niclabs.insight.map.grid.Grid.Data
     * @type {Object}
     * @param {float} lat - latitude for the data point
     * @param {float} lng - longitude for the data point
     * @param {float=} weight - weight for the data point (between 0 and 1)
     */

	/**
	 * Fill calculation function. Receives the list of points of a grid tile and
	 * returns a color for that tile
	 * @callback niclabs.insight.map.grid.Grid~fill
	 * @param {niclabs.insight.map.grid.Grid.Data[]} points
	 * @param {string} fill color for the trile
	 */

	/**
     * Construct an grid from the data provided.
	 *
	 * The grid divides the visible map into equally sized tiles and draws only those
	 * tiles that have elements below them. If a weight is provided for the the data points
	 * each tile is painted with a function of the point weights inside the tile
     *
     * @class niclabs.insight.map.grid.Grid
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this grid belongs to
     * @param {Object} options - configuration options for the grid
     * @param {string} options.layer - identifier for the layer that this grid belongs to
	 * @param {string} [options.strokeColor='#000000'] - color for the stroke of each tile
	 * @param {float} [options.strokeOpacity=0.6] - opacity for the stroke (between 0-1)
	 * @param {integer} [options.strokeWeight=2] - border weight for the tile
	 * @param {string|niclabs.insight.map.grid.Grid~fill} [options.fill='#ffffff'] - color for the fill of the tile,
	 * 	it can have one of the following values:
	 *  	- 'average' calculates the average of the weights in the tile and interpolates that value between the values for options.fill_start and options.fill_end
	 *  	- 'median' calculates the median of the weights in the tile and interpolates as average
	 *  	- rgb color (starting with '#') is used as a fixed color for all tiles
	 *  	- a callback receiving the points in the tile and returning the value for the color
	 * @param {string} [options.fillStart='#ff0000'] - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function
	 * @param {string} [options.fillEnd='#00ff00'] - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function
	 * @param {float} [options.fillOpacity=0.6] - opacity for the fill of the tile
     * @param {niclabs.insight.map.grid.Grid.Data[]} options.data - data for the grid
     */
	var Grid = function(dashboard, options) {
		if (!('layer' in options))
            throw new Error('The grid must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Grids are only supported for Google Maps at the moment");

		var tiles = [];

		var tileConfig = {
			strokeColor: 'strokeColor' in options ? options.strokeColor : '#000000',
			strokeOpacity: 'strokeOpacity' in options ? options.strokeOpacity : 0.6,
			strokeWeight: 'strokeWeight' in options ? options.strokeWeight : 2,
			fillOpacity: 'fillOpacity' in options ? options.fillOpacity : 0.6,
		};

		// Default fill function
		function fillColor() {
			return '#ffffff';
		}

		var fill = options.fill || fillColor;
		if (typeof fill === 'string') {
			if (options.fill.charAt(0) === '#') {
				fill = function() {return options.fill;};
			}
			else if (options.fill === 'average') {
				fill = averageFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else if (options.fill === 'median') {
				fill = medianFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else if (options.fill === 'category') {
				fill = categoryFill(options.colorMap);
			}
			else {
				fill = fillColor;
			}
		}

		var worldBounds = niclabs.insight.quadtree.Bounds(
			niclabs.insight.map.GoogleMercator.cartesian({lat: 90, lng: -180}),
			niclabs.insight.map.GoogleMercator.cartesian({lat: -90, lng: 180})
		);

		var quadtree = niclabs.insight.quadtree.PointQuadTree(worldBounds);

		// TODO: put all data points in a world wide quad tree
		for (var i = 0; i < options.data.length; i++) {
			var coord = niclabs.insight.map.GoogleMercator.cartesian(options.data[i]);

			options.data[i].x = coord.x;
			options.data[i].y = coord.y;

			quadtree.insert(options.data[i]);
		}

		/**
		 * Notify clicks
		 */
		function notifyTileClick(points) {
			return function() {
				niclabs.insight.event.trigger('map_element_selected', points);
			};
		}

		/**
		 * Remove tiles from the map
		 */
		function cleanMap() {
			for (var i = 0; i < tiles.length; i++) {
				tiles[i].setMap(null);
			}
		}

		/**
		 * Refresh the map
		 */
		function refreshMap(bounds) {
			bounds = typeof bounds !== 'undefined' ? bounds : map.googlemap().getBounds();

			// Clean the map
			cleanMap();

			// Build the initial grid
			rebuild(bounds);

			// Listen for changes
			listener.toggle(true);
		}

		var listener = (function () {
			var handler;

			return {
				toggle: function(listen) {
					if (listen && typeof handler === 'undefined') {
						// Listen to boundary changes
				        handler = google.maps.event.addListener(self.map.googlemap(), 'bounds_changed', function() {
							refreshMap(this.getBounds());
				        });
					}
					else if (!listen && typeof handler !== 'undefined') {
						google.maps.event.removeListener(handler);

						handler = undefined;
					}
				}
			};
		})();

        var self = {
            /**
             * Map view where the grid belongs to
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the grid belongs to
             *
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

			/**
			 * Refresh the grid with the current map bounds
			 *
			 * @memberof niclabs.insight.map.grid.Grid
			 */
			refresh: refreshMap,

			/**
			 * Construct a tile from the options of the grid
			 *
			 * @memberof niclabs.insight.map.grid.Grid
			 * @abstract
			 * @return {niclabs.insight.map.grid.Tile}
			 */
			tile: function() {
				throw new Error("Not implemented");
			},

            /**
             * Remove the grid from the map
             *
             * @memberof niclabs.insight.map.grid.Grid
             */
            clear: function() {
				// Clean the map
				cleanMap();

				// Disable the listener
				listener.toggle(false);
            },
        };


		// Build the grid
        function rebuild(mapBounds) {
			if (!mapBounds) return;

			var tile = self.tile();

			// find all points in the map bounds using the quadtree
			var points = quadtree.query(niclabs.insight.quadtree.Bounds(
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getNorthEast().lat(), lng: mapBounds.getSouthWest().lng()}),
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getSouthWest().lat(), lng: mapBounds.getNorthEast().lng()})
			));

			var pointSets = [];
			var tile_i, tile_j;

			for (var i = 0; i < points.length; i++) {
				var coord = tile.query(points[i]);
				tile_i = coord[0];
				tile_j = coord[1];

				if (!pointSets[tile_i]) pointSets[tile_i] = [];
				if (!pointSets[tile_i][tile_j]) pointSets[tile_i][tile_j] = [];

				// if pointSets[tile_i][tile_j] add the point to the list
				pointSets[tile_i][tile_j].push(points[i]);
			}

			tiles = [];

			// for each tile, average (or median) the weights and draw the map
			for (tile_i in pointSets) {
				for (tile_j in pointSets[tile_i]) {
					tileConfig.fillColor = fill(pointSets[tile_i][tile_j]);

					// Draw the tile
					var mapTile = tile.draw(tile.origin(tile_i, tile_j), self.map, tileConfig);

					// Add an event to the click
					google.maps.event.addListener(mapTile, 'click', notifyTileClick(pointSets[tile_i][tile_j]));

					tiles.push(mapTile);
				}
			}
        }

        return self;
	};

	return Grid;
})();
