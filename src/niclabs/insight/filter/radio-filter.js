niclabs.insight.filter.RadioFilter = (function($) {

    /**
     * Radio filter option
     *
     * @typedef niclabs.insight.filter.RadioFilter.Option
     * @type {Object}
     * @param {string} name - name for the option of the filter
     * @param {niclabs.insight.Filters~filter} filter - callback to filter the data
     */

    /**
     * Construct a radio filter for the dashboard
     *
     * A radio filter will be visualized as a `<input type="radio">`
     * HTML element, and calls to apply will pass the call to the appropriate
     * filtering function according to the selected option
     *
     * @class niclabs.insight.filter.RadioFilter
     * @augments niclabs.insight.filter.Filter
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     * @param {string} options.description - description for this filter to use as default option of the select
     * @param {niclabs.insight.filter.RadioFilter.Option[]} options.options - list of options for the filter
     */
    var RadioFilter = function(dashboard, options) {
        var view = niclabs.insight.filter.Filter(dashboard, options);

        var selectOptions = options.options || [];

        // Configure the view
        var selectDiv = $('<div>');

        view.$.append(
            $('<div>').addClass('insight-radio-label')
            .text(options.description));

        inputs = [];

        var addOption = function(id, value, text) {
            var label = $('<label>')
                .addClass('mdl-radio mdl-js-radio mdl-js-ripple-effect')
                .attr('for', id);
            var input = $('<input>')
                .addClass('mdl-radio__button')
                .setID(id)
                .attr('type', 'radio')
                .attr('name', options.id)
                .attr('value', value);
            label.append(input);
            inputs.push(input);
            label.append($('<span>')
                .addClass('mdl-radio__label')
                .text(text));
            // Add the option to the view
            view.$.append(label);
            view.$.append($('<br>'));
        };

        //default
        addOption(options.id + "__default", 0, "No filter");

        var id = 1;

        selectOptions.forEach(function(option) {
            addOption(options.id + "__" + id, id, option.name);
            id++;
        });


        function noFilter(element) {
            return true;
        }

        var filter = noFilter;

        $.each(inputs, function(a) {
            $(this).on('change', function() {
                filter = noFilter;
                var index = $('input:radio[name=' + options.id + ']:checked').val();
                if (index > 0) {
                    // Use the selected filter
                    filter = selectOptions[index - 1].filter;
                }

                niclabs.insight.event.trigger('filter_selected', view);
            });
        });

        /**
         * Apply the filter to a data element
         *
         * @memberof niclabs.insight.filter.RadioFilter
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
    niclabs.insight.handler('radio-filter', 'filter', RadioFilter);

    return RadioFilter;
})(jQuery);
