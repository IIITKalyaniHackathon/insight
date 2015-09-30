niclabs.insight.filter.SelectionFilter = (function($) {

    /**
     * Selection filter option
     *
     * @typedef niclabs.insight.filter.SelectionFilter.Option
     * @type {Object}
     * @param {string} name - name for the option of the filter
     * @param {niclabs.insight.Filters~filter} filter - callback to filter the data
     */

    /**
     * Construct a selection filter for the dashboard
     *
     * A selection filter will be visualized as a `<select>`
     * HTML element, and calls to apply will pass the call to the appropriate
     * filtering function according to the selected option
     *
     * @class niclabs.insight.filter.SelectionFilter
     * @augments niclabs.insight.filter.Filter
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     * @param {string} options.description - description for this filter to use as default option of the select
     * @param {niclabs.insight.filter.SelectionFilter.Option[]} options.options - list of options for the filter
     */
    var SelectionFilter = function(dashboard, options) {
        var view = niclabs.insight.filter.Filter(dashboard, options);

        var selectOptions = options.options || [];

        // Configure the view
        var selectDiv = $('<div>').addClass('mdl-select mdl-js-select mdl-select--floating-label');

        var select = $('<select>')
            .setID(options.id)
            .addClass('mdl-select__input')
            .append($('<option>').text(options.description || ''));

        var label = $('<label>')
            .addClass('mdl-select__label')
            .attr('for', options.id)
            .attr('name', options.id)
            .text('Filter');

        selectOptions.forEach(function(option) {
            select.append($('<option>').text(option.name));
        });


        function noFilter(element) {
            return true;
        }

        var filter = noFilter;

        select.on('change', function() {
            filter = noFilter;
            var index = $(this).prop('selectedIndex');
            if (index > 0) {
                // Use the selected filter
                filter = selectOptions[index - 1].filter;
            }

            niclabs.insight.event.trigger('filter_selected', view);
        });

        // Add the selector to the view
        view.$.append(selectDiv);
        $(selectDiv).append(select);
        $(selectDiv).append(label);


        /**
         * Apply the filter to a data element
         *
         * @memberof niclabs.insight.filter.SelectionFilter
         * @abstract
         * @param {Object} element - data element to evaluate
         * @return {boolean} - true if the data element passes the filter
         */
        view.apply = function(element) {
            // Use the selected filter function
            return filter(element);
        };

        return view;
    };

    // Register the handler
    niclabs.insight.handler('selection-filter', 'filter', SelectionFilter);

    return SelectionFilter;
})(jQuery);
