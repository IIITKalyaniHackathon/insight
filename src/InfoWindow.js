CityDashboard.InfoWindow = function(vizPropList) {

    vizPropList = vizPropList || [];

    this.visualizations = {};
    this.dataSourceTable = {}; // better name?

    for (var i = 0; i < vizPropList.length; i++) {
        this.createVisualization(vizPropList[i]);
    }

    //placing

    var infoWindow = CityDashboard.container('info');

    var _this = this;

    var handler = function(event, arg) {

        infoWindow.off('marker-pressed');

        if (arg.attr.id && !(arg.attr.id in _this.visualizations)) {
            var config = jQuery.extend({}, arg.attr);
            config.data = arg.value;
            config['data-source'] = arg.id;
            // {
            //   'visualization': arg['attr']['visualization'],
            //   'id': arg['attr']['id'],
            //   'data-source': arg['id'],
            //   'data': arg.value,
            //   'preprocess': arg['attr']['preprocess'],
            //   'title': arg['attr']['title'],
            //   'properties': arg['attr']['properties'],
            //   'labels': arg['attr']['labels'],
            //   'checkbox': arg['attr']['checkbox'],
            //   'checkbox-handler': arg['attr']['checkbox-handler'],
            //   'viz': arg['attr']['viz']
            // };

            _this.createVisualization(config);
        }

        var vizs = _this.dataSourceTable[arg.id] || [];
        for (var i = vizs.length - 1; i >= 0; i--) {
            vizs[i].setData(arg.value);
            vizs[i].refresh();
        };

        infoWindow.on('marker-pressed', handler);
    };

    infoWindow.on('marker-pressed', handler);

    infoWindow.on('resize', function(e) {

        for (var key in _this.visualizations) {
            _this.visualizations[key].refresh();
        };

    });

    infoWindow.on('remove-viz', function(e, arg) {
        delete _this.visualizations[arg.id];
        var index = jQuery.inArray(_this.dataSourceTable[arg['data-source']], arg.id);
        _this.dataSourceTable[arg['data-source']].splice(index, 1);
    });

};

CityDashboard.InfoWindow.prototype = {

    constructor: CityDashboard.InfoWindow,

    createVisualization: function(props) {

        var _this = this;
        var type = props.visualization;

        var callback = function(pr) {

            var viz;

            if (!type)
                return;

            else if (type === 'summary-viz')

                viz = new CityDashboard.SummaryVisualization(pr);

            else if (type === 'linechart-viz')

                viz = new CityDashboard.ChartistVisualization(pr, Chartist.Line);

            else if (type === 'barchart-viz')

                viz = new CityDashboard.ChartistVisualization(pr, Chartist.Bar);

            else if (type === 'piechart-viz')

                viz = new CityDashboard.ChartistVisualization(pr, Chartist.Pie);

            else if (type === 'd3-viz')

                viz = new CityDashboard.D3Visualization(pr);

            else if (type === 'general-viz')

                viz = new CityDashboard.GeneralVisualization(pr);

            _this.visualizations[viz.id] = viz;
            _this.dataSourceTable[viz.data_source] = _this.dataSourceTable[viz.data_source] || [];
            _this.dataSourceTable[viz.data_source].push(viz);

            return viz;
        };

        return CityDashboard.getData(props['data-source'], callback, props);
    }
};
