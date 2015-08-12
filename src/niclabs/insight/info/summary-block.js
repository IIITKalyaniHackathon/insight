niclabs.insight.info.SummaryBlock = (function($) {
    /**
     * Construct a new summary information block
     * TODO: describe what is a summary information block
     *
     * @class niclabs.insight.info.SummaryBlock
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} options - configuration options for the block
     * @param {string} options.id - html identifier for the block
     * @param {string=} options.title - title for the block
     * @param {boolean} [options.closable=true] - make the block closable
     * @param {boolean} [options.movable=true] - make the block movable
     * @param {Object|Object[]|Function|String} [options.data] - data for the block,
     *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
     *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
     *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
     *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
     *  options.defaults can be used to set the default data
     * @param {Function} options.preprocess - function to apply on the data (either from an url or a layer) before refreshing the block
     * @param {Object|Object[]} [options.defaults] - when the data depends on a layer, defaults sets the initial data to show
     *  in the block
     */
    var SummaryBlock = function(dashboard, options) {
        var self = niclabs.insight.info.Block(dashboard, options);

        // Create the default template
        /*jshint multistr: true */
        var template = options.template || '\
        <h6 class="mdl-card__title-text" data-if="lat"> \
            lat: <span data-bind="lat"> -- </span> \
            lng: <span data-bind="lng"> -- </span> \
        </h6>\
        <dl class="deflist mdl-card__supporting-text">\
            <dt class="deflist-key" data-if="description">description</dt> \
            <dd class="deflist-value" data-bind="description">none</dd> \
            <dt class="deflist-key" data-if="landmark">landmark</dt> \
            <dd class="deflist-value" data-bind="landmark">none</dd> \
            <dt class="deflist-key" data-if="fun-fact">fun-fact</dt> \
            <dd class="deflist-value" data-bind="fun-fact">none</dd> \
        </dl>\
        ';

        // Append the template to the content
        self.content.template(template);

        // Store the refresh method of the parent
        var refresh = self.refresh;

        /**
         * Override the parent refresh
         */
        self.refresh = function(data) {
            data = typeof data !== 'undefined' ? data : self.data();

            // Call the parent refresh
            refresh(data);

            // Render the data
            self.content.trigger('render', data);
        };

        // Create the default summary if provided
        self.refresh();

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);
