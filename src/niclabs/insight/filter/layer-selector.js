niclabs.insight.filter.LayerSelector = (function($) {


    /**
     * Construct a layer for the dashboard
     *
     * The layer selector provides an option to switch between layers of the dashboard
     *
     * @class niclabs.insight.filter.LayerSelector
     * @augments niclabs.insight.filter.Filter
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     */
    var LayerSelector = function(dashboard, options) {
        var view = niclabs.insight.filter.Filter(dashboard, options);

        var layers = {};

        var selectDiv = $('<div>').addClass('mdl-select mdl-js-select mdl-select--floating-label');

        // Configure the view
        var select = $('<select>')
            .setID(options.id)
            .addClass('mdl-select__input');

        var label = $('<label>')
            .addClass('mdl-select__label')
            .attr('for', options.id)
            .attr('name', options.id)
            .text('Select Layer');

        // Hide the selector if there are no elements
        select.hide();

        select.on('change', function() {
            dashboard.active($(this).val());
        });

        // Add the selector to the view
        view.$.append(selectDiv);
        $(selectDiv).append(select);
        $(selectDiv).append(label);

        /**
         * Add a layer to the selector
         *
         * @memberof niclabs.insight.filter.LayerSelector
         * @param {string} id - id for the layer
         * @param {name} name - name of the layer
         */
        view.add = function(id, name) {
            layers[id] = name;
            select.append($('<option>').attr('value', id).text(name));

            // Show the selector if there is more than one layer
            // Note: layers.length returns undefined
            if (Object.keys(layers).length > 1)
                select.show();
        };

        return view;
    };

    // Register the handler
    niclabs.insight.handler('layer-selector', 'filter', LayerSelector);

    return LayerSelector;
})(jQuery);
