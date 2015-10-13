/**
 * Contains all data operation classes
 *
 * @namespace
 */
niclabs.insight.data = (function () {
    var sources = {};


    /**
     * Helper method to get/register a new data source for the dashboard
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {String} id - identifier for the data source
     * @param {Object[]|String|Function|niclabs.insight.Data} src - source of data, it can be an array, a URL, a function or a DataSource object
     * @param {Object=} options - extra options for the data source
     * @returns {niclabs.insight.data.DataSource} data source
     */
    var data = function(id, src, options) {
        if (typeof src === 'undefined') {
            if (!(id in sources)) throw Error("No data source with id "+id);
            return sources[id];
        }

        // if (typeof src === 'object') {
        //     sources[id] = src;
        //     return src;
        // }

        sources[id] = niclabs.insight.data.Selector(id, src, options);
        return sources[id];
    };

    return data;
})();
