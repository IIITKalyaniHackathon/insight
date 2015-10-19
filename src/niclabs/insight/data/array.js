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
    var constructor = function(dashboard, options) {
        var self = niclabs.insight.data.DataSource(dashboard, options);

        var data = options.src || [];

        /**
         * Iterate over the data source elements
         *
         * Iterates over the elements of the array/
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         * @param {} filter -
         */
        self.forEach = function(fn, filter) {
            noFilter =  function() {
                return true;
            };
            currentFilter = filter || noFilter;
            for (var i = 0; i < data.length; i++) {
                if (currentFilter.call(data[i], data[i], i)) {
                    fn.call(data[i], data[i], i);
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

    // Register the handler
    niclabs.insight.handler('array-data', 'data', constructor);

    return constructor;
})();
