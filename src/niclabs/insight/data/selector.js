niclabs.insight.data.Selector = (function($){
    /**
     * Select a new data source depending on the type of input.
     *
     * If the parameter given by src is an array, an Array data source will be used,
     * if it is a a URL, a JSON data source wil be used,
     * if its a function returning an array in which case the result of the function will be used
     * if it is none, then an empty Array source is created
     *
     * @class niclabs.insight.data.Selector
     * @extends niclabs.insight.data.DataSource
     * @param {String} id - identifier for the data source
     * @param {Object[]|String|Function} src - source of data
     * @param {Object=} options - extra options for the data source
     */
    var constructor = function(id, src, options) {
        if (Array.isArray(src)) {
            options = $.extend({'id' : id, 'src': src}, options);
            return niclabs.insight.data.Array(options);
        }
        else if (typeof src === 'string') {
            options = $.extend({'id' : id, 'src': src}, options);
            return niclabs.insight.data.JSON(options);
        }
        else if (typeof src === 'function') {
            options = $.extend({'id' : id, 'src': src.call()}, options);
            return niclabs.insight.data.Array(options);
        }
        else {
            options = $.extend({'id' : id, 'src': []}, options);
            return niclabs.insight.data.Array(options);
        }
    };

    return constructor;
})(jQuery);
