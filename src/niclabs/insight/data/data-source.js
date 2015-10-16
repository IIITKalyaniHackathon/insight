niclabs.insight.data.DataSource = (function() {
    /**
     * Constructs a new data source
     *
     * A DataSource object encapsulates interaction with sources of data, whether they
     * come from code defined arrays, a JSON/CSV remote source, API call, or other data sources
     *
     * @class niclabs.insight.data.DataSource
     * @extends {niclabs.insight.Element}
     * @param {Object} options - configuration options for the data source
     * @param {String} options.id - identifier for referencing this data source
     */
    var constructor = function(dashboard, options) {
        var self = niclabs.insight.Element(options);

        // TODO: we should find a way to notify that new data has been received

        /**
         * Iterate over the data source elements
         *
         * This method will iterate over the elements of the data source, passing their relative position in the
         * data source and the value for the element in that position to the callback function.
         *
         * Although this method could sometimes be run synchronously (if the data source is an array), its better to assume
         * that it runs asynchronously, specially when dealing with remote data sources
         *
         * The order of the iteration must be defined by each data source.
         *
         * @memberof niclabs.insight.data.DataSource
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         * @abstract
         */
        self.forEach = function(fn) {
            throw Error("Not implemented");
        };

        /**
         * Iterate over the data source elements, but skips the filtered elements
         *
         * @memberof niclabs.insight.data.DataSource
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.filteredForEach = function(fn) {
            throw Error("Not implemented");
        };

        /**
         * Iterate over the data source elements and marks data elements as not visible
         *
         * @memberof niclabs.insight.data.DataSource
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
         */
        self.filter = function(fn) {
            throw Error("Not implemented");
        };

        /**
         * Fold function
         *
         * @memberof niclabs.insight.data.DataSource
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the reduce function
         */
        self.reduce = function(fn, init) {
            throw Error("Not implemented");
        };

        /**
         * Map function
         *
         * @memberof niclabs.insight.data.DataSource
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the map function
         */
        self.map = function(fn) {
            throw Error("Not implemented");
        };

        return self;
    };

    return constructor;
})();
