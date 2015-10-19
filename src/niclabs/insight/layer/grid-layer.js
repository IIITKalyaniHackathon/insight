niclabs.insight.layer.GridLayer = (function() {
    /**
     * Construct a new grid Layer
     *
     * @class niclabs.insight.layer.GridLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     * @param {Object=} options.grid - options for the grid
     */
    var GridLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var gridOptions = options.grid || {
            'type': 'hexagon'
        };

        function createGrid(data, obj) {
            var grid;
            if ('type' in obj) {
                var attr = {
                    'layer': layer.id,
                    'data': data
                };

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                grid = niclabs.insight.handler(obj.type)(dashboard, attr);
            } else {
                grid = obj;

                // Should we add a way to pass data to the grid?
            }

            return grid;
        }

        var grid;

        /**
         * Draw the grid according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            grid = createGrid(data, gridOptions);
        };

        /**
         * Clear the grid from the map
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         */
        layer.clear = function() {
            if (grid) grid.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            var data = layer.data();
            layer.clear();
            layer.draw(data, fn);
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('grid-layer', 'layer', GridLayer);

    return GridLayer;
})();
