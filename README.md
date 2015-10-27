Urban Insight
=============

Insight is a generic web dashboard for smart city projects. Its meant to integrate multiple data sources and visualize them in innovating ways to provide a clear view of whats happening on a particular city, for instance, in terms of transport, mobility, noise, temperature, etc.

This project provides a Javascript module to ease the creation of such type of visualization dashboard.

![Insight Dashboard](https://cloud.githubusercontent.com/assets/1822826/7576036/57c3c36e-f810-11e4-9cec-7f6e9be5b4ee.png)

Aimed to urban wide visualization, the dashboard is divided on a map view, which can display markers and other visualizations that
depend on the location, and an information view, where multiple information blocks can be setup to convey useful information regarding the data in the map.

Key Concepts
------------

There are multiple elements associated with an insight dashboard, both in terms of UI and communication.

* [Map View](DOCS.md#niclabs.insight.MapView). Is the main view of the dashboard, where visualization elements related to a city location can be displayed on a map.
* [Info View](DOCS.md#niclabs.insight.InfoView). The side view of the dashboard. Here, multiple information blocks can be setup to convey useful information regarding the dashboard.
* [Block](DOCS.md#niclabs.insight.info.Block). Serves to communicate pieces of information related to the data in the dashboard. For instance, they can show a description of the dashboard data, a chart to display more information about an individual element on the map, or any other piece of relevant information.
* [DataSource](DOCS.md#niclabs.insight.data.DataSource) Encapsulates operations over an specified data (such as forEach, map or reduce). A data source can be provided literally (as an array by the code) or as URL to a JSON data source.
* [Layer](DOCS.md#niclabs.insight.layer.Layer) Ties a data source with a visualization over the map.
* [Filter](DOCS.md#niclabs.insight.filter.Filter). Provides a means to update the visualization depending on specific criteria.


Available Layers
-----------------

Here are some of the layers available to use on the map.

* Marker Layer. Allows to display markers on the map. Basic, circle and image markers are supported.
![Marker Layer](https://cloud.githubusercontent.com/assets/1822826/7576038/57c90504-f810-11e4-8fa0-75fc1479d5c2.png)

* Grid Layer. A grid divides the visible map into tiles of the same size and draws only those tiles that contain data elements geographically speaking. If a weight is provided for the the data points each tile is painted with a function of the point weights inside the tile. Square and Hexagonal tiles are supported.
![Grid Layer](https://cloud.githubusercontent.com/assets/1822826/7576035/57c364e6-f810-11e4-849d-4454321a3468.png)

* Heatmap Layer. Draws a heatmap with the given data.
![Grid Layer](https://cloud.githubusercontent.com/assets/1822826/7576037/57c4110c-f810-11e4-90b3-3da515d10b0d.png)

Quick Start
-----------

* Setup the base html to display the canvas. We assume that `insight.min.js` and `insight.min.css` from the `dist/` directory are placed under the directories `js/` and `css/` respectively. Remember to replace the Google Maps developer Key in `API_KEY`.
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Insight dashboard</title>
    <style>
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
      }
      #dashboard {
        width: 100%;
        height: 100%;
      }
    </style>
    <!-- CityDashboard Styles -->
    <link rel="stylesheet" type="text/css" href="css/insight.min.css">

    <!-- MDL Styles -->
    <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.4/material.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <!-- jQuery -->
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>

    <!-- Google Maps -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=API_KEY"></script>

    <!-- MDL Framework -->
    <script src="https://storage.googleapis.com/code.getmdl.io/1.0.4/material.min.js"></script>

    <!-- Insight -->
    <script src="js/insight.min.js"></script>
  </head>

  <body>
    <!-- The main element for the canvas -->
    <div id="dashboard"></div>
  </body>

  <script>
    // The dashboard initialization goes here
  </script>
</html>
```
* Initialize the dashboard specifying the element that will serve as anchor point. The `layout` option indicates that the dashboard will have an info view that will go on the left side (the default is 'none').
```javascript
// Binding the map and the information window.
var dashboard = niclabs.insight.dashboard({
    'anchor': '#dashboard',
    'layout': 'left'
});
```
* Setup the map giving the center coordinates and default zoom level.
```javascript
var map = niclabs.insight.map({
    'handler': 'google-map',
    'lat': 48.8583,
    'lng': 2.2944,
    'zoom': 15
});
```
* Setup a basic info view. The `handler` keywords tells te dashboard the type of view to create (for now only `basic-info-view` is supported).
```javascript
var infoview = niclabs.insight.info({
    handler: 'basic-info-view',
    blocks: [{
        'handler': 'summary-block',
        'id': 'description',
        'title': 'Dashboard description',
        'data': {
            'description': 'This block is not affected by map events'
        }
    }]
});
```
As previously stated, an info view can contain multiple info blocks, which can be added during initialization of the view,
* or later, accessing the methods of the [InfoView](DOCS.md#niclabs.insight.InfoView) object.
```javascript
infoview.block({
    'handler': 'summary-block',
    'id': 'summary',
    'title': 'My Marker Summary',
    'defaults': {
        'description': 'This block will show the details of the selected markers'
    }
});
```
When creating a block, the `handler` keyword, specifies the type of block to build (`summary-block`, `chartist-barchart`, `chartist-piechart`). A block can display independent data or depend on the data given by layers of the dashboard. The keyword `data` sets the data for the block, which by default will use the layer data. The keyword `default` sets the default data for the block while data from the layer is not received.
* Next, we describe the data source for the dashboard. A data source is an object that encapsulates all actions between the filter or visualization with the data. For now, it can be a javascript array or a JSON URL. The user provide this data with an unique ID to reference later in the layer definition.
```javascript
infoview.block({
    'handler': 'array-data',
    'id': 'parisData',
    'src': [{ // Dataset
        'lat': 48.860611,
        'lng': 2.337644,
        'landmark': 'Musée du Louvre',
        'value': [
            [2237, 4650, 5221, 8089, 2970, 2847, 9059]
        ],
        'note': 'This is not the actual number of visitors.'
    }, {
        'lat': 48.859961,
        'lng': 2.326561,
        'landmark': 'Musée d\'Orsay',
        'value': [
            [8971, 10724, 5257, 2434, 10583, 9038, 5240]
        ],
        'note': 'This is not the actual number of visitors.'
    }, {
        'lat': 48.873792,
        'lng': 2.295028,
        'landmark': 'L’Arc de Triomphe',
        'value': [
            [9679, 10777, 9417, 1521, 6218, 1740, 2490]
        ],
        'note': 'This is not the actual number of visitors.'
    }, {
        'lat': 48.852968,
        'lng': 2.349902,
        'landmark': 'Cathédrale Notre-Dame',
        'value': [
            [9806, 10989, 8219, 1503, 3847, 2007, 10751]
        ],
        'note': 'This is not the actual number of visitors.'
    }, {
        'lat': 48.85837,
        'lng': 2.294481,
        'landmark': 'Tour Eiffel',
        'value': [
            [3576, 10255, 2112, 5716, 9728, 10805, 6082]
        ],
        'note': 'This is not the actual number of visitors.'
    }]
});
```
* Finally, we need to provide layers of data to the dashboard. A layer ties a data source with a specific visualization on the map.
```javascript
niclabs.insight.layer({
    handler: 'marker-layer', // Type of layer
    name: 'Museum Visitors', // Name
    data: 'parisData',
    summary: function(data) { // Calculates summary to pass to the summary blocks
        var totals = {
            description: 'Weeky visitors for '+data.length+' museums in Paris',
            value: [
                [0,0,0,0,0,0,0],
            ]
        };

        var i,j;
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < data[i].value[0].length; j++) {
                totals.value[0][j] += data[i].value[0][j];
            }
        }

        return totals;
    },
    marker: { // Configurate the markers
        'type': 'image-marker',
        'src': 'antenna.svg'
    }
});
```

Dependencies
------------

We have tried to keep the dependencies to a minimum, and coded the dashboard with loosely tied components, meaning, for instance, that even though the dashboard uses Google Maps, this dependency is not hard wired in the code, and we plan to support other types of maps in the future.

The tool currently depends on
* [jQuery](https://jquery.com/) - for DOM manipulation
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/)
* [Material Design Lite](http://www.getmdl.io/) - for web construction and layout
* [chartist.js](https://gionkunz.github.io/chartist-js/) - Optional for displaying charts


Building City Dashboard
-----------------------

* Make sure you have the node package manager installed
* Clone this repo
```bash
> git clone https://github.com/niclabs/insight.git
```

* Install developer dependencies
```bash
> cd insight
> npm install
```

* Run [Gulp](http://gulpjs.com/).
 ```bash
 > gulp
 ```

 This will generate the distribution files for testing the dashboard and watch for changes on the files. If you just want to build the sources you can run
 ```bash
 > gulp sources
 ```
