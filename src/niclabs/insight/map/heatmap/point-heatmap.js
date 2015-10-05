niclabs.insight.map.heatmap.PointHeatmap = (function($) {
    /**
     * Data point for PointHeatmap
     *
     * @typedef niclabs.insight.map.heatmap.PointHeatmap.Data
     * @type {Object}
     * @param {float} lat - latitude for the heatmap point
     * @param {float} lng - longitude for the heatmap point
     * @param {float=} weight - weight for the heatmap point
     */

    /**
     * Draw a point base heatmap over the map
     *
     * In a point based heatmap, each data point is a location with an optional
     * weight. A heatmap point is drawn for each location with the provided configuration
     *
     * @class niclabs.insight.map.heatmap.PointHeatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this heatmap belongs to
     * @param {Object} options - configuration options for the heatmap
     * @param {niclabs.insight.map.heatmap.PointHeatmap.Data[]} options.data - array of points to draw the heatmap
     * @param {boolean} options.dissipating - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.
     * @param {string[]} options.gradient - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.
     * @param {integer} options.radius - The radius of influence for each data point, in pixels.
     * @param {float} options.opacity: The opacity of the heatmap, expressed as a number between 0 and 1.
     */
    var PointHeatmap = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the heatmap');
        }

        var self = niclabs.insight.map.heatmap.Heatmap(dashboard, options);

        /**
         * Create a google map heatmap
         */
        function googleMapsHeatmap(data) {
            var heatmapData = new google.maps.MVCArray();
            data.filteredForEach(function(data,i) {
                if ('weight' in data) {
                    heatmapData.push({
                        location: new google.maps.LatLng(data.lat, data.lng),
                        weight: data.weight
                    });
                } else {
                    heatmapData.push(new google.maps.LatLng(data.lat, data.lng));
                }
            });

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
         * @memberof niclabs.insight.map.heatmap.PointHeatmap
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
    niclabs.insight.handler('point-heatmap', 'heatmap', PointHeatmap);

    return PointHeatmap;
})(jQuery);
