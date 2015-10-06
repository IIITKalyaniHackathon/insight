niclabs.insight.layer.GraphLayer = (function($) {
    /**
     * TODO: Missing documentation
     */
    var GraphLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var graphOptions = options.graph || {
            'type': 'simple-graph'
        };

        var nodes = [];
        var edges = [];

        function createGraph(data, obj) {
            var graph;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the graph
                $.extend(attr, obj);

                graph = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                graph = obj;

                // Should we add a way to pass data to the graph?
            }

            graph.clickable(true);

            return graph;
        }

        /**
         * Create node from the type attribute
         *
         * @param {Object[]} data - layer data
         * @param {number} index - index of the node in the data array
         * @param {Object} obj - configuration for the new node
          */
        function newNode(data, index, obj) {
            var node;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, data[index]);

                node = niclabs.insight.handler('node')(dashboard, attr);
            }
            else {
                node = obj;
            }

            // Make the node clickable
            node.clickable(true);

            return node;
        }

        /**
         * Create edge from the type attribute
         *
         * @param {Object[]} data - layer data
         * @param {number} index - index of the first node in the data array
         * @param {number} j - index of the second node in the data array
         * @param {Object} obj - configuration for the new edge
          */
        function newEdge(data, index, j, obj) {
            var edge;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, {'startNode': data[index] , 'endNode': data[j]});

                edge = niclabs.insight.handler('edge')(dashboard, attr);
            }
            else {
                edge = obj;
            }

            // Make the edge clickable
            edge.clickable(true);

            return edge;
        }

        var graph;

        /**
         * Draw the graphElements according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.GraphLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the graphElement
         * @param {float} data[].lng - longitude for the graphElement
         * @param {string=} data[].description - description for the graphElement
         */
        layer.draw = function(data) {
            //TODO: use for each
            rawData = data.asArray();
            for (var i = 0; i < rawData.length; i++) {
                nodes.push(newNode(rawData, i, graphOptions));
            }
            for (i = 0; i < graphOptions.adj.length; i++) {
              for (var j = 0; j < i; j++) {
                if (graphOptions.adj[i][j] == 1) {
                  edges.push(newEdge(rawData, i, j, graphOptions));
                }
              }
            }
        };

        /**
         * Clear the graph from the map
         *
         * @memberof niclabs.insight.layer.GraphLayer
         * @override
         */
        layer.clear = function() {
          for (var i = 0; i < nodes.length; i++) {
            nodes[i].clear();
          }

          // Clean the array
          nodes = [];

          for (i = 0; i < edges.length; i++) {
            edges[i].clear();
          }

          // Clean the array
          edges = [];

        };

        /**
         * TODO: Missing documentation
         */
        layer.filter = function(fn) {
            // TODO. not sure if possible
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('graph-layer', 'layer', GraphLayer);

    return GraphLayer;
})(jQuery);
