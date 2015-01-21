CityDashboard.HexagonalGrid = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Grid.call(this, layer_params, attr, map, assoc_layer);

};

CityDashboard.HexagonalGrid.prototype = Object.create(CityDashboard.Grid.prototype);

CityDashboard.HexagonalGrid.prototype = {

  constructor: CityDashboard.HexagonalGrid,

  build: function(mapBounds) {

    l = this.attr.size || 0.02;

    var n = this.tiles.length;

    for(var i = 0; i < n; i++) {
      this.tiles[i].setMap(null);
    }
    this.tiles = [];

    var zoom = this.map.getZoom();

    var init = l*(Math.pow(2,12));
    var array = [];
    for(var i = 0; i < 22; i++) {
      array.push(init);
      init = init/2;
    }

    var size = array[zoom];

    var NE = mapBounds.getNorthEast();
    var SW = mapBounds.getSouthWest();

    var h = Math.ceil((3/4)*Math.abs(SW.lat()-NE.lat())/size);
    var w = Math.ceil((5/8)*Math.abs(SW.lng()-NE.lng())/size);

    var v = size*Math.sin(Math.PI/6);
    var v2 = size*Math.cos(Math.PI/6);

    for (var i = 0; i < h; i++) {
      for (var j = 0; j < w; j++) {

        var x = NE.lat() - (size+v)*i;
        var y;
        if (i % 2 == 0)
          y = NE.lng() - 2*v2*j + v2;
        else
          y = NE.lng() - 2*v2*j;

        var myLatlng = [
          new google.maps.LatLng(x, y),
          new google.maps.LatLng(x-size, y),
          new google.maps.LatLng(x-size-v, y-v2),
          new google.maps.LatLng(x-size, y-2*v2),
          new google.maps.LatLng(x, y-2*v2),
          new google.maps.LatLng(x+v, y-v2),
          new google.maps.LatLng(x, y)
        ];

        var hexagon = new google.maps.Polygon({
          paths: myLatlng,
          strokeColor: this.attr.color || '#578b8b',
          strokeOpacity: 0.5,
          strokeWeight: 2,
          fillColor: this.attr.color || '#578b8b',
          fillOpacity: 0.0,
          geodesic: true
        });

        google.maps.event.addListener(hexagon, 'mouseover', function(event) {
            this.setOptions({fillOpacity: 0.2});
          });

        google.maps.event.addListener(hexagon, 'mouseout', function(event) {
            this.setOptions({fillOpacity: 0.0});
          });

        hexagon.setMap(this.map);

        this.tiles.push(hexagon);

      }
    }

  },

  addEvents: function() {

    var myself = this;

    google.maps.event.addListener(this.map, 'bounds_changed', function() {
        window.setTimeout(myself.build(this.getBounds()), 50); 
      });

  }

};


