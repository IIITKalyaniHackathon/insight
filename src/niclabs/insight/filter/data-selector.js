niclabs.insight.filter.dataSelector = (function($) {

    var constructor = function(dashboard, options) {

        var view = niclabs.insight.filter.Filter(dashboard, options);

        var selectOptions = options.options || [];

        // Configure the view
        var selectDiv = $('<div>').addClass('mdl-select mdl-js-select mdl-select--floating-label');

        var select = $('<select>')
            .setID(options.id)
            .addClass('mdl-select__input');

        var label = $('<label>')
            .addClass('mdl-select__label')
            .attr('for', options.id)
            .attr('name', options.id)
            .text(options.description);

        selectOptions.forEach(function(option) {
            select.append($('<option>').text(option.name));
        });

        // Add the selector to the view
        view.$.append(selectDiv);
        $(selectDiv).append(select);
        $(selectDiv).append(label);

        select.on('change', function() {
            var index = $(this).prop('selectedIndex');

            niclabs.insight.data(options.dataSourceID).changeParam(options.paramKey,selectOptions[index].value);

            // Redraw data
            niclabs.insight.event.trigger('filter_selected', view);
        });

        return view;

    };

    // Register the handler
    niclabs.insight.handler('data-selector', 'filter', constructor);

    return constructor;
})(jQuery);
