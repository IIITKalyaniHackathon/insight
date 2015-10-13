niclabs.insight.Element = (function($) {
    /**
     * Construct a generic insight element
     *
     * @class niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var Element = function(options) {
        if (!('id' in options)) {
            throw Error("All dashboard elements must define an identifier");
        }

        var id = options.id;
        if (!/^[^#. '"]+$/.test(id)) {
            throw Error("The dashboard element id must be at least 1 character long and cannot contain the following characters ['#','.',' ', '\'', '\"'])");
        }

        return {
            /**
             * Identifier for the insight element
             *
             * @memberof niclabs.insight.Element
             * @member {string}
             */
            get id () {
                return id;
            },
        };
    };

    return Element;
})(jQuery);
