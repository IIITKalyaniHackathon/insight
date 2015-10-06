niclabs.insight.data.JSON = (function($){
    /**
     * Construct a new JSON data source.
     *
     * @class niclabs.insight.data.JSON
     * @extends niclabs.insight.data.DataSource
     * @param {Object} options - configuration options for the data source
     * @param {String} options.id - identifier for referencing this data source
     * @param {String} options.src - URL source for the data
     * @param {Object|String} [options.data] - request data to be sent to the server as an object or an url parameters string
     * @param {String} [options.callback] - callback to use for JSONP data sources, can also be passed as a data or query parameter
     * @param {String} [options.listkey] - key the data source list if the JSON response is an object
     */
    var constructor = function(options) {
        var self = niclabs.insight.data.DataSource(options);

        if (typeof options.src !== 'string' || !niclabs.insight.utils.isValidURL(options.src)) {
            throw Error(options.src + " is not a valid URL");
        }

        var data = [];
        var loaded = false;

        // See if request data has been defined
        var requestData = {};
        if (options.data !== null && typeof options.data === 'object') {
            requestData = options.data;
        }
        else if (options.data !== null && typeof options.data === 'string') {
            // Convert the string to an object
            options.data.split("&").forEach(function(part) {
                var item = part.split("=");
                requestData[item[0]] = decodeURIComponent(item[1]);
            });
        }

        if (options.callback) requestData.callback = options.callback;

        /**
         * Iterate over the data source elements
         *
         * Iterates over the elements of the JSON data source. This function may run asynchronously
         * if the JSON data has not been loaded
         *
         * @memberof niclabs.insight.data.JSON
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.forEach = function(fn) {
            // Delegate the iteration
            function iterate(data, f) {
                for (var i = 0; i < data.length; i++) {
                    f.call(data[i], data[i], i);
                }
            }

            if (loaded) {
                // We already have the data
                iterate(data, fn);
            }
            else {
                // Otherwise get it
                $.getJSON(options.src, requestData, function(d) {
                    var i;
                    if (options.listkey) {
                        data = d[options.listkey];
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }
                    else {
                        data = d;
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }

                    // Set the data as loaded
                    loaded = true;

                    // Finally over the data
                    iterate(data, fn);
                });
            }
        };

        /**
         * Iterate over the data source elements, but skips the filtered elements
         *
         * Iterates over the elements of the array/
         *
         * @memberof niclabs.insight.data.JSON
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - handler for the data element
         */
        self.filteredForEach = function(fn) {
            // Delegate the iteration
            function iterate(data, f) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].visible) {
                        f.call(data[i], data[i], i);
                    }
                }
            }

            if (loaded) {
                // We already have the data
                iterate(data, fn);
            }
            else {
                // Otherwise get it
                $.getJSON(options.src, requestData, function(d) {
                    var i;
                    if (options.listkey) {
                        data = d[options.listkey];
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }
                    else {
                        data = d;
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }

                    // Set the data as loaded
                    loaded = true;

                    // Finally over the data
                    iterate(data, fn);
                });
            }
        };

        /**
         * Iterate over the data source elements and marks data elements as not visible
         *
         * @memberof niclabs.insight.data.JSON
         * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
         */
        self.filter = function(fn) {
            // Delegate the iteration
            function iterate(data, f) {
                for (var i = 0; i < data.length; i++) {
                    if (!fn.call(data[i], data[i], i)) {
                        data[i].visible = false;
                    }
                }
            }

            if (loaded) {
                // We already have the data
                iterate(data, fn);
            }
            else {
                // Otherwise get it
                $.getJSON(options.src, requestData, function(d) {
                    var i;
                    if (options.listkey) {
                        data = d[options.listkey];
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }
                    else {
                        data = d;
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }

                    // Set the data as loaded
                    loaded = true;

                    // Finally over the data
                    iterate(data, fn);
                });
            }
        };

        // /**
        //  * Fold function
        //  *
        //  * @memberof niclabs.insight.data.JSON
        //  * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
        //  */
        // self.reduce = function(fn, init) {
        //     var ret = fn.call(data[0], init, data[0]);
        //     for (var i = 1; i < data.length; i++) {
        //         ret = fn.call(data[i], ret, data[i], i);
        //     }
        //     return ret;
        // };
        //
        // /**
        //  * Map function
        //  *
        //  * @memberof niclabs.insight.data.JSON
        //  * @param {niclabs.insight.data.DataSource~useDataElement} fn - filter for the data element
        //  */
        // self.map = function(fn) {
        //     var array = data;
        //     for (var i = 0; i < data.length; i++) {
        //         array[i] = fn.call(data[i], data[i], i);
        //     }
        //     return array;
        // };

        // DEBUGGING
        self.asArray = function() {
            if (loaded) {
                // We already have the data
                return data;
            }
            else {
                // Otherwise get it
                $.getJSON(options.src, requestData, function(d) {
                    var i;
                    if (options.listkey) {
                        data = d[options.listkey];
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }
                    else {
                        data = d;
                        for (i = 0; i < data.length; i++) {
                            $.extend(data[i], {
                                visible: true
                            });
                        }
                    }

                    // Set the data as loaded
                    loaded = true;

                    // Finally over the data
                    iterate(data, fn);
                });
                return data;
            }
        };

        return self;
    };

    return constructor;
})(jQuery);
