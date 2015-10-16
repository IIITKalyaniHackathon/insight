/**
 * Contains all data operation classes
 *
 * @namespace
 */
niclabs.insight.data = (function() {
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
    var data = function(obj) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");

        if (typeof obj === 'string') {
            if (!(obj in sources)) throw Error("No data source with id " + obj);
            return sources[obj];
        }
        sources[obj.id] = dashboard.dataSource(obj);
        return dashboard.dataSource(obj);
    };

    return data;
})();
