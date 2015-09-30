niclabs.insight.Filters = (function($) {
    "use strict";

    /**
     * Constructs a filter bar for the dashboard
     *
     * @class niclabs.insight.Filters
     * @augments {niclabs.insight.View}
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this view belongs to
     * @param {Object} options - configuration options for the filters
     */
    return function(dashboard, options) {
        options = options || {};

        var barId = options.id || 'insight-filters';

        var view = niclabs.insight.View({id: barId});

        // Bar container
        view.$.addClass('filters');

        // List of filters
        var filters = niclabs.insight.ElementList(dashboard);

        /**
         * Function to act as a filter for the data
         *
         * The function returns false if the data must be removed from the visualization
         * or true if the data must be kept
         *
         * @callback niclabs.insight.Filters~filter
         * @param {Object} element - data element to evaluate
         * @returns {boolean} true if the data passes the filter
         */


        /**
         * Data selector to act as filter for the layer data
         *
         * The selector is a composition of the application of all the individual filters
         * of this filter view
         */
        function selector(element) {
            var result = true;
            filters.each(function(key, filter) {
                if (!filter.apply(element)) {
                    result = false;
                    return false;
                }
            });

            return result;
        }

        /**
         * Event triggered when a filter has been selected
         *
         * It serves to communicate to the filters view that one of its filters has changed
         *
         * @event niclabs.insight.Filters#filter_selected
         * @type {niclabs.insight.filter.Filter}
         */
        niclabs.insight.event.on('filter_selected', function(filter) {
            /**
             * Event triggered when a filter has changed
             *
             * It will pass as parameter the filtering function to apply to
             * the layers
             *
             * @event niclabs.insight.Filters#filter_changed
             * @type {niclabs.insight.Filters~filter}
             */
            niclabs.insight.event.trigger('filter_changed', selector);
        });


         /**
          * Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
          * of the filter for further customizations
          *
          * @memberof niclabs.insight.Filters
          * @param {Object|niclabs.insight.filter.Filter|number} obj - configuration for the filter or filter identifier
          * @return {jQuery} reference to the added element for further customization
          */
        view.filter = function(obj) {
            var filter = filters.element(obj);

            // Append the filter to the view
            view.append(filter);

            return filter;
        };

        return view;
    };
})(jQuery);
