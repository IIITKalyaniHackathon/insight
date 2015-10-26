niclabs.insight.filter.SliderFilter = (function($) {

    /**
     * Construct a slider filter for the dashboard
     *
     * A selection filter will be visualized as a `<input type=range>`
     * HTML element, and calls to apply will pass the call to the appropriate
     * filtering function according to the selected value
     *
     * @class niclabs.insight.filter.SliderFilter
     * @augments niclabs.insight.filter.Filter
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     * @param {string} options.description - description for this filter
     * @param {function} options.filter - slider filtering function
     * @param {float} options.min - minimum value for the slider
     * @param {float} options.max - maximum value for the slider
     */
    var SliderFilter = function(dashboard, options) {
        var view = niclabs.insight.filter.Filter(dashboard, options);

        // Configure the view
        var p = $('<p>');
        var slider = $('<input>').addClass('mdl-slider mdl-js-slider')
            .attr('type', 'range')
            .attr('min', '0')
            .attr('max', '100')
            .attr('value', '0');

        slider.on('change', function() {
            sliderVal = (options.max - options.min) * ($(this).val() / 100) + options.min;
            filter = options.filter;
            label.text(options.description + " - Current value: " + sliderVal.toFixed(2));
            niclabs.insight.event.trigger('filter_selected', view);
        });

        var label = $('<div>').addClass('insight-radio-label')
            .text(options.description + " - Current value: None");

    // Add the selector to the view
    view.$.append(label);
    view.$.append(p);
    $(p).append(slider);
    // $(selectDiv).append(label);


    /**
     * Apply the filter to a data element
     *
     * @memberof niclabs.insight.filter.SliderFilter
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
niclabs.insight.handler('slider-filter', 'filter', SliderFilter);

return SliderFilter;
})(jQuery);
