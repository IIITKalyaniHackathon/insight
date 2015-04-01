niclabs.insight.info.ChartistBlock = (function($) {
    /**
     * Construct a new chartis information block
     *
     * @class niclabs.insight.info.ChartistBlock
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} constructor - chartist object to use as constructor
     * @param {Object} options - configuration options for the block
     * @param {string} options.id - html identifier for the block
     * @param {string=} options.title - title for the block
     * @param {Object} options.chartist - chartist configuration
     * @param {Object=} options.properties - block properties (closable, movable)
     * @param {Object=} data - default data for the summary
     */
     var ChartistBlock = function (dashboard, constructor, options) {
         var self = niclabs.insight.info.Block(dashboard, options);

         var chartist = options.chartist;

         self.content.addClass('chartist-viz').append( $('<div>').addClass(chartist.class));

         var chartistOptions = chartist.options || {};
         var responsiveOptions = chartist.responsiveOptions || {};
         var labels = chartist.labels;

         // Store the chart object
         var chart;

         var refresh = self.refresh;

         self.refresh = function(data) {
             data = typeof data === 'undefined' ? self.data() : data;

             // Call the parent
             refresh(data);

             // Look for 'value' key in data
             data = data.value || data;

             var chartData  = {
               'series': data,
               'labels': typeof labels === 'function' ? labels(data) : labels
             };

             if (chart && chart.optionsProvider) {
                 chart.update(chartData);
             }
             else {
                 chart = new constructor( (self.content.find('div'))[0], chartData , chartistOptions, responsiveOptions);
             }
         };

         if (options.data) self.refresh(options.data);


         var remove = self.remove;

         // Override remove method
         self.remove = function() {
             // Call the parent
             remove();

             chart.detach();
         };

         return self;
     };

     var ChartistLineChartBlock = function(dashboard, options) {
        var self = ChartistBlock(dashboard, Chartist.Line, options);
        return self;
     };

     var ChartistBarChartBlock = function(dashboard, options) {
        var self = ChartistBlock(dashboard, Chartist.Bar, options);
        return self;
    };

    var ChartistPieChartBlock = function(dashboard, options) {
       var self = ChartistBlock(dashboard, Chartist.Pie, options);
       return self;
    };

     // Register the handler
     niclabs.insight.handler('chartist-linechart', 'info-block', ChartistLineChartBlock);
     niclabs.insight.handler('chartist-barchart', 'info-block', ChartistBarChartBlock);
     niclabs.insight.handler('chartist-piechart', 'info-block', ChartistPieChartBlock);

     return ChartistBlock;
 })(jQuery);
