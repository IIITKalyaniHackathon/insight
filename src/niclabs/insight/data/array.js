niclabs.insight.data.Array = (function() {
    /**
     * Construct a new Array data source
     *
     * @class niclabs.insight.data.Array
     * @extends niclabs.insight.data.DataSource
     * @param {Object} options - configuration options for the data source
     * @param {String} options.id - identifier for referencing this data source
     * @param {Object[]} options.src - source of data
     */
    var constructor = function(options) {
        var self = niclabs.insight.data.DataSource(options);

        var data = options.src || [];

        // filter purposes
        for (var i = 0; i < data.length; i++) {
            $.extend(data[i], {
                visible: true
            });
        }

        /**
         * Iterate over the data source elements
         *
         * Iterates over the elements of the array/
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.forEach = function(fn) {
            for (var i = 0; i < data.length; i++) {
                fn.call(data[i], data[i], i);
            }
        };

        self.filteredForEach = function(fn) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].visible) {
                    fn.call(data[i], data[i], i);
                }
            }
        };

        self.filter = function(fn) {
            for (var i = 0; i < data.length; i++) {
                if (!fn.call(data[i], data[i], i)) {
                    data[i].visible = false;
                }
            }
        };

        // DEBUGGING
        self.array = function(fn) {
            return data;
        };

        return self;
    };

    return constructor;
})();
