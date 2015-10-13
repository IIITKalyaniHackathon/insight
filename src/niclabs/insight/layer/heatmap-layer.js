niclabs.insight.layer.HeatmapLayer = (function($) {
    /**
     * Construct a new heatmap layer
     *
     * @class niclabs.insight.layer.HeatmapLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     * @param {Object=} options.heatmap - options for the heatmap
     */
    var HeatmapLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var heatmapOptions = options.heatmap || {
            'type': 'point-heatmap'
        };

        function createHeatmap(data, obj) {
            var heatmap;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                heatmap = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                heatmap = obj;

                // Should we add a way to pass data to the heatmap?
            }

            return heatmap;
        }

        var heatmap;

        /**
         * Draw the heatmap according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            heatmap = createHeatmap(data, heatmapOptions);
        };

        /**
         * Clear the heatmap from the map
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         */
        layer.clear = function() {
            if (heatmap) heatmap.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            var data = layer.data();
            data.filter(fn);
            layer.clear();
            layer.draw(data);
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('heatmap-layer', 'layer', HeatmapLayer);

    return HeatmapLayer;
})(jQuery);
