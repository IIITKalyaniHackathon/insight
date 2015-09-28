niclabs.insight.InfoView = (function($) {
    "use strict";

    /**
     * Construct the dashboard information view
     *
     * The information view is composed of information blocks to show
     * different aspects of the data shown in the map or
     * about the visualization in general
     *
     * @class niclabs.insight.InfoView
     * @extends {niclabs.insight.View}
     * @param {niclabs.insight.Dashboard} dashboard - dashboard to assign this info view to
     * @param {Object} options - list of configuration options for the information view
     */
    var InFoView = function(dashboard, options) {
        // Default visualization property list
        options = options || {};

        var infoViewId = options.id || "insight-blocks";

        var element = niclabs.insight.View({
            id: infoViewId
        });

        // /*jshint multistr: true */
        // var defaultView = '\
        // <div id="insight-default-view" class="mdl-card mdl-shadow--2dp block"> \
        //     <div class="mdl-card__title mdl-card--expand mdl-color--cyan-600"> \
        //         <h2 class="mdl-card__title-text insight-info-view__title">Insight</h2> \
        //     </div> \
        //     <div class="mdl-card__supporting-text mdl-color--cyan-600 insight-info-view__subtitle"> \
        //         <p>Information about myself. More information here and here.</p> \
        //         <i class="material-icons">search</i> \
        //         <div id="searchDiv" class="mdl-textfield mdl-js-textfield insight-geocode-textfield"> \
        //             <input class="mdl-textfield__input insight-geocode-textfield__input" type="text" id="search" /> \
        //             <label class="mdl-textfield__label insight-geocode-textfield__label" for="search">Enter your location</label> \
        //         </div> \
        //     </div> \
        //     <div id="info" class="mdl-grid mdl-grid--no-spacing"> \
        //         <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect"> \
        //             <div class="mdl-tabs__tab-bar"> \
        //                 <a href="#information-panel" class="mdl-tabs__tab is-active">Information</a> \
        //                 <a href="#filter-panel" class="mdl-tabs__tab">Layers</a> \
        //             </div> \
        //             <div class="mdl-tabs__panel is-active" id="insight-information-panel"> \
        //                 <div class="mdl-card__supporting-text mdl-color-text--grey-600"> \
        //                     <h3>Description</h3> \
        //                     <p>Descriptive description</p> \
        //                 </div> \
        //             </div> \
        //             <div class="mdl-tabs__panel" id="insight-filter-panel"> \
        //                 <h3>Select layer</h3> \
        //             </div> \
        //         </div> \
        //     </div> \
        // </div>';
        //
        // element.$.html(defaultView);

        // Toggle to show and hide
        //element.$.hidable();

        var blocks = niclabs.insight.ElementList(dashboard);

        //element.$.hidable();

        /**
         * Add/get a block from the info view
         *
         * - If a number or string is provided as value for obj, the block with that id is returned
         * - If a generic object is provided with the handler defined in the 'handler' property, a new block
         * is created using the handler and the block is added to the list of
         * blocks of the info view
         * - If an object is provided without handler, it is assumed to be a Block object and added to the
         * block list as is.
         *
         * @memberof niclabs.insight.InfoView
         * @param {string|number|Object| niclabs.insight.info.Block} obj - block id to get or configuration options for the new block
         * @returns {niclabs.insight.info.Block} - newly created block
         */
        element.block = function(obj) {
            var blk = blocks.element(obj);

            // Append block to container
            element.$.append(blk.element);

            return blk;
        };

        // For index
        var i;

        // Create the blocks in the options list
        if (options.blocks) {
            for (i = 0; i < options.blocks.length; i++) {
                element.block(options.blocks[i]);
            }
        }

        // Add a resize handler
        element.$.on('resize', function(e) {
            blocks.each(function(key, block) {
                block.refresh();
            });
        });

        // Perform cleanup on block removal
        niclabs.insight.event.on('remove-block', function(obj) {
            blocks.remove(obj.id);
        });
        return element;
    };

    // Register the info view constructor
    niclabs.insight.handler('basic-info-view', 'info-view', InFoView);

    return InFoView;
})(jQuery);
