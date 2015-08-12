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

        var infoViewId = options.id || "insight-info-view";


        var element = niclabs.insight.View({id: infoViewId});

        // Create the info view
        element.$.addClass('mdl-cell mdl-cell--3-col-desktop');

        var resizeOrientation;

        if (dashboard.config('layout') !== 'none') {
            if (dashboard.config('layout') === 'left') {
                // TODO: move filter bar
                resizeOrientation = 'e';
            }
            else if (dashboard.config('layout') === 'right') {
                resizeOrientation = 'w';
            }
            //element.$.resizable(resizeOrientation);
        }

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
