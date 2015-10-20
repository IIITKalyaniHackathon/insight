niclabs.insight.map.heatmap.SegmentHeatmap = (function($) {
    /**
     * Data segment for SegmentHeatmap
     *
     * @typedef niclabs.insight.map.heatmap.SegmentHeatmap.Data
     * @type {Object}
     * @param {Object[]} coordinates - array of [lat,lng] coordinates
     * @param {float=} weight - weight for the heatmap segment. Defaults to 1.
     */

    /**
     * Draw a segment based heatmap over the map
     *
     * In a segment based heatmap, each data segment is a set of points with an optional
     * weight. A heatmap segment is drawn for each location array with
     * the provided configuration.
     *
     * @class niclabs.insight.map.heatmap.SegmentHeatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this heatmap belongs to
     * @param {Object} options - configuration options for the heatmap
     * @param {niclabs.insight.map.heatmap.SegmentHeatmap.Data[]} options.data - array of segments to draw the heatmap
     * @param {boolean} options.dissipating - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.
     * @param {string[]} options.gradient - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.
     * @param {integer} options.radius - The radius of influence for each data point, in pixels.
     * @param {float} options.opacity: The opacity of the heatmap, expressed as a number between 0 and 1.
     */
    var SegmentHeatmap = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the heatmap');
        }

        var self = niclabs.insight.map.heatmap.Heatmap(dashboard, options);

        var filter = options.filter;

        /**
         * Create a google map heatmap
         */
        function googleMapsHeatmap(data) {

            var heatmapData = new google.maps.MVCArray();

            data.forEach(function(data,i) {

                segment_size = data.coordinates.length;

                for (var j = 0; j < segment_size - 1; j++) {

                    //Distance of point a to b
                    var d = Math.sqrt(Math.pow((data.coordinates[j + 1][0] - data.coordinates[j][0]), 2) + Math.pow((data.coordinates[j + 1][1] - data.coordinates[j][1]), 2));

                    //Number of points with distance 0.00001 in between, colinear with a to b line
                    var l = Math.floor(d / 0.00001);

                    //Distance to jump
                    var delta = {
                        lat: (data.coordinates[j + 1][0] - data.coordinates[j][0]) / l,
                        lng: (data.coordinates[j + 1][1] - data.coordinates[j][1]) / l
                    };

                    //Storing the line
                    for (var k = 0; k < l; k++) {
                        if ('weight' in data) {
                            heatmapData.push({
                                location: new google.maps.LatLng(data.coordinates[j][0] + delta.lat * k,
                                                                 data.coordinates[j][1] + delta.lng * k),
                                weight: data.weight
                            });
                        }
                        else {
                            heatmapData.push(new google.maps.LatLng(data.coordinates[j][0] + delta.lat * k,
                                                                    data.coordinates[j][1] + delta.lng * k));
                        }
                    }
                }

            }, filter);

            return new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                radius: options.radius || 10
            });
        }

        // Create the heatmap
        var heatmap = googleMapsHeatmap(options.data);

        // Set the options
        if (typeof options.dissipating !== 'undefined') heatmap.set('dissipating', options.dissipating);
        if (typeof options.gradient !== 'undefined') heatmap.set('gradient', options.gradient);
        if (typeof options.opacity !== 'undefined') heatmap.set('opacity', options.opacity);

        // Set the heatmap
        heatmap.setMap(self.map.googlemap());

        // Store the parent
        var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.heatmap.SegmentHeatmap
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            heatmap.setMap(null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('segment-heatmap', 'heatmap', SegmentHeatmap);

    return SegmentHeatmap;
})(jQuery);
