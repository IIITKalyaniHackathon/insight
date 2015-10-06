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

        /**
         * Iterate over the data source elements, but skips the filtered elements
         *
         * Iterates over the elements of the array/
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.filteredForEach = function(fn) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].visible) {
                    fn.call(data[i], data[i], i);
                }
            }
        };

        /**
         * Iterate over the data source elements and marks data elements as not visible
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
         */
        self.filter = function(fn) {
            for (var i = 0; i < data.length; i++) {
                if (!fn.call(data[i], data[i], i)) {
                    data[i].visible = false;
                }
            }
        };

        /**
         * Fold function
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
         */
        self.reduce = function(fn, init) {
            var ret = fn.call(data[0], init, data[0]);
            for (var i = 1; i < data.length; i++) {
                ret = fn.call(data[i], ret, data[i], i);
            }
            return ret;
        };

        /**
         * Map function
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
         */
        self.map = function(fn) {
            var array = data;
            for (var i = 0; i < data.length; i++) {
                array[i] = fn.call(data[i], data[i], i);
            }
            return array;
        };

        // DEBUGGING
        self.asArray = function() {
            return data;
        };

        return self;
    };

    return constructor;
})();
