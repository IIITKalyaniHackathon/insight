niclabs.insight.data.Array = (function(){
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

        var data = options.data && options.data.length || [];

        /**
         * Iterate over the data source elements
         *
         * Iterates over the elements of the array/
         *
         * @memberof niclabs.insight.data.Array
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.each = function(fn) {
            for (var i = 0; i < data.length; i++) {
                fn.call(data[i], data[i], i);
            }
        };

        return self;
    };

    return constructor;
})();
