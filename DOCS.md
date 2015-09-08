<a name="niclabs"></a>
#niclabs
[NIC Chile Research Labs](http://niclabs.cl/) is the Internet Laboratory of the
[Faculty of Physical and Mathematical Sciences of the University of Chile (FCFM)](http://www.fcfm.uchile.cl/),
founded by [NIC Chile](http://www.nic.cl) and host of [INRIA Chile Internet Project](http://www.inria.cl/?page_id=23&lang=en).

Our main research areas are: Internet protocols (layer 3-4), DNS, Internet QoS, Internet QoE, and computer networks.

We are based in Santiago, Chile, in front of the FCFM, Universidad de Chile.

**Members**

* [niclabs](#niclabs)
  * [niclabs.insight](#niclabs.insight)
    * [insight.handler(name, [kind], [handler])](#niclabs.insight.handler)
    * [insight.dashboard([options])](#niclabs.insight.dashboard)
    * [insight.info([obj])](#niclabs.insight.info(2))
    * [insight.layer(obj, [activate])](#niclabs.insight.layer(2))
    * [insight.map([obj])](#niclabs.insight.map(2))
    * [insight.event](#niclabs.insight.event)
      * [event.on(event, listener)](#niclabs.insight.event.on)
      * [event.off(event, listener)](#niclabs.insight.event.off)
      * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
      * [callback: event~listener](#niclabs.insight.event..listener)
    * [insight.filter](#niclabs.insight.filter)
      * [class: filter.Filter](#niclabs.insight.filter.Filter)
        * [new filter.Filter(dashboard, options)](#new_niclabs.insight.filter.Filter)
        * [Filter.view.apply(element)](#niclabs.insight.filter.Filter.view.apply)
      * [class: filter.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter)
        * [new filter.GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter)
      * [class: filter.LayerSelector](#niclabs.insight.filter.LayerSelector)
        * [new filter.LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector)
        * [LayerSelector.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
      * [class: filter.SelectionFilter](#niclabs.insight.filter.SelectionFilter)
        * [new filter.SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter)
        * [SelectionFilter.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply)
        * [type: SelectionFilter.Option](#niclabs.insight.filter.SelectionFilter.Option)
    * [insight.info](#niclabs.insight.info)
      * [class: info.Block](#niclabs.insight.info.Block)
        * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
        * [Block.id](#niclabs.insight.info.Block.id)
        * [Block.element](#niclabs.insight.info.Block.element)
        * [Block.$](#niclabs.insight.info.Block.$)
        * [Block.layer](#niclabs.insight.info.Block.layer)
        * [Block.content](#niclabs.insight.info.Block.content)
        * [Block.data](#niclabs.insight.info.Block.data)
        * [Block.remove()](#niclabs.insight.info.Block.remove)
        * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
        * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
      * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
        * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
        * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
      * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
        * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)
    * [insight.layer](#niclabs.insight.layer)
      * [class: layer.DiagramLayer](#niclabs.insight.layer.DiagramLayer)
        * [new layer.DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer)
        * [DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
        * [DiagramLayer.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
        * [DiagramLayer.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.DiagramLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.DiagramLayer#event_layer_sumary)
      * [class: layer.GridLayer](#niclabs.insight.layer.GridLayer)
        * [new layer.GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer)
        * [GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
        * [GridLayer.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
        * [GridLayer.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.GridLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.GridLayer#event_layer_sumary)
      * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
        * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
        * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
        * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
        * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
      * [class: layer.Layer](#niclabs.insight.layer.Layer)
        * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
        * [Layer.id](#niclabs.insight.layer.Layer.id)
        * [Layer.name](#niclabs.insight.layer.Layer.name)
        * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
        * [Layer.load()](#niclabs.insight.layer.Layer.load)
        * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
        * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
        * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
        * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
        * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
        * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
        * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
        * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)
    * [insight.map](#niclabs.insight.map)
      * [map.diagram](#niclabs.insight.map.diagram)
        * [diagram.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
        * [diagram.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
        * [diagram.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
        * [class: diagram.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
          * [new diagram.DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram)
          * [DelaunayDiagram.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
          * [type: DelaunayDiagram.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data)
        * [class: diagram.Diagram](#niclabs.insight.map.diagram.Diagram)
          * [new diagram.Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram)
          * [Diagram.map](#niclabs.insight.map.diagram.Diagram.map)
          * [Diagram.layer](#niclabs.insight.map.diagram.Diagram.layer)
          * [Diagram.clear()](#niclabs.insight.map.diagram.Diagram.clear)
          * [Diagram.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
        * [class: diagram.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
          * [new diagram.VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram)
          * [VoronoiDiagram.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
          * [type: VoronoiDiagram.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data)
      * [map.graph](#niclabs.insight.map.graph)
        * [class: graph.Edge](#niclabs.insight.map.graph.Edge)
          * [new graph.Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge)
        * [class: graph.GraphElement](#niclabs.insight.map.graph.GraphElement)
          * [new graph.GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement)
          * [GraphElement.map](#niclabs.insight.map.graph.GraphElement.map)
          * [GraphElement.layer](#niclabs.insight.map.graph.GraphElement.layer)
          * [GraphElement.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement)
          * [GraphElement.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
          * [GraphElement.clear()](#niclabs.insight.map.graph.GraphElement.clear)
          * [GraphElement.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible)
        * [class: graph.Node](#niclabs.insight.map.graph.Node)
          * [new graph.Node(dashboard, options)](#new_niclabs.insight.map.graph.Node)
      * [map.grid](#niclabs.insight.map.grid)
        * [class: grid.Grid](#niclabs.insight.map.grid.Grid)
          * [new grid.Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid)
          * [Grid.map](#niclabs.insight.map.grid.Grid.map)
          * [Grid.layer](#niclabs.insight.map.grid.Grid.layer)
          * [Grid.refresh](#niclabs.insight.map.grid.Grid.refresh)
          * [Grid.tile()](#niclabs.insight.map.grid.Grid.tile)
          * [Grid.clear()](#niclabs.insight.map.grid.Grid.clear)
          * [type: Grid.Data](#niclabs.insight.map.grid.Grid.Data)
          * [callback: Grid~fill](#niclabs.insight.map.grid.Grid..fill)
        * [class: grid.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
          * [new grid.HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile)
          * [HexagonTile.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin)
          * [HexagonTile.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query)
          * [HexagonTile.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices)
        * [class: grid.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
          * [new grid.HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid)
        * [class: grid.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
          * [new grid.SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid)
        * [class: grid.SquareTile](#niclabs.insight.map.grid.SquareTile)
          * [new grid.SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile)
          * [SquareTile.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin)
          * [SquareTile.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query)
          * [SquareTile.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices)
        * [class: grid.Tile](#niclabs.insight.map.grid.Tile)
          * [new grid.Tile()](#new_niclabs.insight.map.grid.Tile)
          * [Tile.origin(i, j)](#niclabs.insight.map.grid.Tile.origin)
          * [Tile.query(coord)](#niclabs.insight.map.grid.Tile.query)
          * [Tile.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices)
          * [Tile.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw)
      * [map.heatmap](#niclabs.insight.map.heatmap)
        * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
          * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
          * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
          * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
          * [Heatmap.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
        * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
          * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
          * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
          * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
        * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
          * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
          * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
          * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
      * [map.marker](#niclabs.insight.map.marker)
        * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
          * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
        * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
          * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
        * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
          * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
          * [Marker.map](#niclabs.insight.map.marker.Marker.map)
          * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
          * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
          * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
          * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
          * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
        * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
          * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
      * [type: map.LatLng](#niclabs.insight.map.LatLng)
      * [type: map.Point](#niclabs.insight.map.Point)
      * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
        * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
        * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
        * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
        * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)
      * [map.GoogleMercator](#niclabs.insight.map.GoogleMercator)
    * [insight.quadtree](#niclabs.insight.quadtree)
      * [type: quadtree.Point](#niclabs.insight.quadtree.Point)
      * [class: quadtree.Bounds](#niclabs.insight.quadtree.Bounds)
        * [new quadtree.Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds)
        * [Bounds.center](#niclabs.insight.quadtree.Bounds.center)
        * [Bounds.min](#niclabs.insight.quadtree.Bounds.min)
        * [Bounds.max](#niclabs.insight.quadtree.Bounds.max)
        * [Bounds.contains(point)](#niclabs.insight.quadtree.Bounds.contains)
        * [Bounds.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects)
      * [class: quadtree.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
        * [new quadtree.PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree)
        * [PointQuadTree.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity)
        * [PointQuadTree.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds)
        * [PointQuadTree.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert)
        * [PointQuadTree.query(range)](#niclabs.insight.quadtree.PointQuadTree.query)
    * [callback: insight~handler](#niclabs.insight..handler)
    * [class: insight.Dashboard](#niclabs.insight.Dashboard)
      * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
      * [Dashboard.element](#niclabs.insight.Dashboard.element)
      * [Dashboard.$](#niclabs.insight.Dashboard.$)
      * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
      * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
      * [Dashboard.layout()](#niclabs.insight.Dashboard.layout)
      * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
      * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
      * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
      * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
      * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
      * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
      * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
    * [class: insight.Filters](#niclabs.insight.Filters)
      * [new insight.Filters(dashboard, options)](#new_niclabs.insight.Filters)
      * [Filters.view.filter(obj)](#niclabs.insight.Filters.view.filter)
      * [callback: Filters~filter](#niclabs.insight.Filters..filter)
      * [event: "filter_selected"](#niclabs.insight.Filters#event_filter_selected)
      * [event: "filter_changed"](#niclabs.insight.Filters#event_filter_changed)
    * [class: insight.MapView](#niclabs.insight.MapView)
      * [new insight.MapView(options)](#new_niclabs.insight.MapView)
      * [MapView.element](#niclabs.insight.MapView.element)
      * [MapView.$](#niclabs.insight.MapView.$)
      * [MapView.lat](#niclabs.insight.MapView.lat)
      * [MapView.lng](#niclabs.insight.MapView.lng)
      * [MapView.width](#niclabs.insight.MapView.width)
      * [MapView.height](#niclabs.insight.MapView.height)
      * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
      * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
      * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
    * [class: insight.ElementList](#niclabs.insight.ElementList)
      * [new insight.ElementList(dashboard)](#new_niclabs.insight.ElementList)
      * [ElementList.self.element(obj)](#niclabs.insight.ElementList.self.element)
      * [ElementList.self.each(iterator)](#niclabs.insight.ElementList.self.each)
      * [ElementList.self.remove(id)](#niclabs.insight.ElementList.self.remove)
      * [callback: ElementList~iterator](#niclabs.insight.ElementList..iterator)
    * [class: insight.Element](#niclabs.insight.Element)
      * [new insight.Element(options)](#new_niclabs.insight.Element)
      * [Element.id](#niclabs.insight.Element.id)
    * [class: insight.InfoView](#niclabs.insight.InfoView)
      * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
      * [InfoView.element.block(obj)](#niclabs.insight.InfoView.element.block)
    * [class: insight.View](#niclabs.insight.View)
      * [new insight.View(options)](#new_niclabs.insight.View)
      * [View.$](#niclabs.insight.View.$)
      * [View.element](#niclabs.insight.View.element)
      * [View.self.append(element)](#niclabs.insight.View.self.append)
    * [insight.Color](#niclabs.insight.Color)
      * [Color.rgbToHsv(r, g, b)](#niclabs.insight.Color.rgbToHsv)
      * [Color.hsvToRgb(h, s, v)](#niclabs.insight.Color.hsvToRgb)
      * [Color.rgbToHex(rgb)](#niclabs.insight.Color.rgbToHex)
      * [Color.hexToRgb(hex)](#niclabs.insight.Color.hexToRgb)
    * [insight.Interpolation](#niclabs.insight.Interpolation)
      * [Interpolation.interpolate(value, maximum, start_point, end_point)](#niclabs.insight.Interpolation.interpolate)
      * [Interpolation.interpolate3d(value, maximum, s, e)](#niclabs.insight.Interpolation.interpolate3d)
      * [Interpolation.interpolateRgb(value, maximum, start_rgb, e)](#niclabs.insight.Interpolation.interpolateRgb)

<a name="niclabs.insight"></a>
##niclabs.insight
Insight is a generic web dashboard for smart city projects.

It allows to combine different chart and visualization tools to better
understand what is going on in the city

**Members**

* [niclabs.insight](#niclabs.insight)
  * [insight.handler(name, [kind], [handler])](#niclabs.insight.handler)
  * [insight.dashboard([options])](#niclabs.insight.dashboard)
  * [insight.info([obj])](#niclabs.insight.info(2))
  * [insight.layer(obj, [activate])](#niclabs.insight.layer(2))
  * [insight.map([obj])](#niclabs.insight.map(2))
  * [insight.event](#niclabs.insight.event)
    * [event.on(event, listener)](#niclabs.insight.event.on)
    * [event.off(event, listener)](#niclabs.insight.event.off)
    * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
    * [callback: event~listener](#niclabs.insight.event..listener)
  * [insight.filter](#niclabs.insight.filter)
    * [class: filter.Filter](#niclabs.insight.filter.Filter)
      * [new filter.Filter(dashboard, options)](#new_niclabs.insight.filter.Filter)
      * [Filter.view.apply(element)](#niclabs.insight.filter.Filter.view.apply)
    * [class: filter.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter)
      * [new filter.GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter)
    * [class: filter.LayerSelector](#niclabs.insight.filter.LayerSelector)
      * [new filter.LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector)
      * [LayerSelector.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
    * [class: filter.SelectionFilter](#niclabs.insight.filter.SelectionFilter)
      * [new filter.SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter)
      * [SelectionFilter.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply)
      * [type: SelectionFilter.Option](#niclabs.insight.filter.SelectionFilter.Option)
  * [insight.info](#niclabs.insight.info)
    * [class: info.Block](#niclabs.insight.info.Block)
      * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
      * [Block.id](#niclabs.insight.info.Block.id)
      * [Block.element](#niclabs.insight.info.Block.element)
      * [Block.$](#niclabs.insight.info.Block.$)
      * [Block.layer](#niclabs.insight.info.Block.layer)
      * [Block.content](#niclabs.insight.info.Block.content)
      * [Block.data](#niclabs.insight.info.Block.data)
      * [Block.remove()](#niclabs.insight.info.Block.remove)
      * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
      * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
    * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
      * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
      * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
    * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
      * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)
  * [insight.layer](#niclabs.insight.layer)
    * [class: layer.DiagramLayer](#niclabs.insight.layer.DiagramLayer)
      * [new layer.DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer)
      * [DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
      * [DiagramLayer.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
      * [DiagramLayer.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.DiagramLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.DiagramLayer#event_layer_sumary)
    * [class: layer.GridLayer](#niclabs.insight.layer.GridLayer)
      * [new layer.GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer)
      * [GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
      * [GridLayer.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
      * [GridLayer.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.GridLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.GridLayer#event_layer_sumary)
    * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
      * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
      * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
      * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
      * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
    * [class: layer.Layer](#niclabs.insight.layer.Layer)
      * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
      * [Layer.id](#niclabs.insight.layer.Layer.id)
      * [Layer.name](#niclabs.insight.layer.Layer.name)
      * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
      * [Layer.load()](#niclabs.insight.layer.Layer.load)
      * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
      * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
      * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
      * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
    * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
      * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
      * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
      * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
      * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)
  * [insight.map](#niclabs.insight.map)
    * [map.diagram](#niclabs.insight.map.diagram)
      * [diagram.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
      * [diagram.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
      * [diagram.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
      * [class: diagram.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
        * [new diagram.DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram)
        * [DelaunayDiagram.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
        * [type: DelaunayDiagram.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data)
      * [class: diagram.Diagram](#niclabs.insight.map.diagram.Diagram)
        * [new diagram.Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram)
        * [Diagram.map](#niclabs.insight.map.diagram.Diagram.map)
        * [Diagram.layer](#niclabs.insight.map.diagram.Diagram.layer)
        * [Diagram.clear()](#niclabs.insight.map.diagram.Diagram.clear)
        * [Diagram.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
      * [class: diagram.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
        * [new diagram.VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram)
        * [VoronoiDiagram.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
        * [type: VoronoiDiagram.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data)
    * [map.graph](#niclabs.insight.map.graph)
      * [class: graph.Edge](#niclabs.insight.map.graph.Edge)
        * [new graph.Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge)
      * [class: graph.GraphElement](#niclabs.insight.map.graph.GraphElement)
        * [new graph.GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement)
        * [GraphElement.map](#niclabs.insight.map.graph.GraphElement.map)
        * [GraphElement.layer](#niclabs.insight.map.graph.GraphElement.layer)
        * [GraphElement.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement)
        * [GraphElement.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
        * [GraphElement.clear()](#niclabs.insight.map.graph.GraphElement.clear)
        * [GraphElement.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible)
      * [class: graph.Node](#niclabs.insight.map.graph.Node)
        * [new graph.Node(dashboard, options)](#new_niclabs.insight.map.graph.Node)
    * [map.grid](#niclabs.insight.map.grid)
      * [class: grid.Grid](#niclabs.insight.map.grid.Grid)
        * [new grid.Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid)
        * [Grid.map](#niclabs.insight.map.grid.Grid.map)
        * [Grid.layer](#niclabs.insight.map.grid.Grid.layer)
        * [Grid.refresh](#niclabs.insight.map.grid.Grid.refresh)
        * [Grid.tile()](#niclabs.insight.map.grid.Grid.tile)
        * [Grid.clear()](#niclabs.insight.map.grid.Grid.clear)
        * [type: Grid.Data](#niclabs.insight.map.grid.Grid.Data)
        * [callback: Grid~fill](#niclabs.insight.map.grid.Grid..fill)
      * [class: grid.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
        * [new grid.HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile)
        * [HexagonTile.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin)
        * [HexagonTile.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query)
        * [HexagonTile.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices)
      * [class: grid.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
        * [new grid.HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid)
      * [class: grid.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
        * [new grid.SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid)
      * [class: grid.SquareTile](#niclabs.insight.map.grid.SquareTile)
        * [new grid.SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile)
        * [SquareTile.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin)
        * [SquareTile.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query)
        * [SquareTile.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices)
      * [class: grid.Tile](#niclabs.insight.map.grid.Tile)
        * [new grid.Tile()](#new_niclabs.insight.map.grid.Tile)
        * [Tile.origin(i, j)](#niclabs.insight.map.grid.Tile.origin)
        * [Tile.query(coord)](#niclabs.insight.map.grid.Tile.query)
        * [Tile.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices)
        * [Tile.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw)
    * [map.heatmap](#niclabs.insight.map.heatmap)
      * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
        * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
        * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
        * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
        * [Heatmap.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
      * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
        * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
        * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
        * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
      * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
        * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
        * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
        * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
    * [map.marker](#niclabs.insight.map.marker)
      * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
        * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
      * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
        * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
      * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
        * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
        * [Marker.map](#niclabs.insight.map.marker.Marker.map)
        * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
        * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
        * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
        * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
        * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
      * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
        * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
    * [type: map.LatLng](#niclabs.insight.map.LatLng)
    * [type: map.Point](#niclabs.insight.map.Point)
    * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
      * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
      * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
      * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
      * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)
    * [map.GoogleMercator](#niclabs.insight.map.GoogleMercator)
  * [insight.quadtree](#niclabs.insight.quadtree)
    * [type: quadtree.Point](#niclabs.insight.quadtree.Point)
    * [class: quadtree.Bounds](#niclabs.insight.quadtree.Bounds)
      * [new quadtree.Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds)
      * [Bounds.center](#niclabs.insight.quadtree.Bounds.center)
      * [Bounds.min](#niclabs.insight.quadtree.Bounds.min)
      * [Bounds.max](#niclabs.insight.quadtree.Bounds.max)
      * [Bounds.contains(point)](#niclabs.insight.quadtree.Bounds.contains)
      * [Bounds.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects)
    * [class: quadtree.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
      * [new quadtree.PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree)
      * [PointQuadTree.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity)
      * [PointQuadTree.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds)
      * [PointQuadTree.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert)
      * [PointQuadTree.query(range)](#niclabs.insight.quadtree.PointQuadTree.query)
  * [callback: insight~handler](#niclabs.insight..handler)
  * [class: insight.Dashboard](#niclabs.insight.Dashboard)
    * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
    * [Dashboard.element](#niclabs.insight.Dashboard.element)
    * [Dashboard.$](#niclabs.insight.Dashboard.$)
    * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
    * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
    * [Dashboard.layout()](#niclabs.insight.Dashboard.layout)
    * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
    * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
    * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
    * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
    * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
    * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
    * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
  * [class: insight.Filters](#niclabs.insight.Filters)
    * [new insight.Filters(dashboard, options)](#new_niclabs.insight.Filters)
    * [Filters.view.filter(obj)](#niclabs.insight.Filters.view.filter)
    * [callback: Filters~filter](#niclabs.insight.Filters..filter)
    * [event: "filter_selected"](#niclabs.insight.Filters#event_filter_selected)
    * [event: "filter_changed"](#niclabs.insight.Filters#event_filter_changed)
  * [class: insight.MapView](#niclabs.insight.MapView)
    * [new insight.MapView(options)](#new_niclabs.insight.MapView)
    * [MapView.element](#niclabs.insight.MapView.element)
    * [MapView.$](#niclabs.insight.MapView.$)
    * [MapView.lat](#niclabs.insight.MapView.lat)
    * [MapView.lng](#niclabs.insight.MapView.lng)
    * [MapView.width](#niclabs.insight.MapView.width)
    * [MapView.height](#niclabs.insight.MapView.height)
    * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
    * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
    * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
  * [class: insight.ElementList](#niclabs.insight.ElementList)
    * [new insight.ElementList(dashboard)](#new_niclabs.insight.ElementList)
    * [ElementList.self.element(obj)](#niclabs.insight.ElementList.self.element)
    * [ElementList.self.each(iterator)](#niclabs.insight.ElementList.self.each)
    * [ElementList.self.remove(id)](#niclabs.insight.ElementList.self.remove)
    * [callback: ElementList~iterator](#niclabs.insight.ElementList..iterator)
  * [class: insight.Element](#niclabs.insight.Element)
    * [new insight.Element(options)](#new_niclabs.insight.Element)
    * [Element.id](#niclabs.insight.Element.id)
  * [class: insight.InfoView](#niclabs.insight.InfoView)
    * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
    * [InfoView.element.block(obj)](#niclabs.insight.InfoView.element.block)
  * [class: insight.View](#niclabs.insight.View)
    * [new insight.View(options)](#new_niclabs.insight.View)
    * [View.$](#niclabs.insight.View.$)
    * [View.element](#niclabs.insight.View.element)
    * [View.self.append(element)](#niclabs.insight.View.self.append)
  * [insight.Color](#niclabs.insight.Color)
    * [Color.rgbToHsv(r, g, b)](#niclabs.insight.Color.rgbToHsv)
    * [Color.hsvToRgb(h, s, v)](#niclabs.insight.Color.hsvToRgb)
    * [Color.rgbToHex(rgb)](#niclabs.insight.Color.rgbToHex)
    * [Color.hexToRgb(hex)](#niclabs.insight.Color.hexToRgb)
  * [insight.Interpolation](#niclabs.insight.Interpolation)
    * [Interpolation.interpolate(value, maximum, start_point, end_point)](#niclabs.insight.Interpolation.interpolate)
    * [Interpolation.interpolate3d(value, maximum, s, e)](#niclabs.insight.Interpolation.interpolate3d)
    * [Interpolation.interpolateRgb(value, maximum, start_rgb, e)](#niclabs.insight.Interpolation.interpolateRgb)

<a name="niclabs.insight.handler"></a>
###insight.handler(name, [kind], [handler])
Register a handler of a specific insight element ('layer', 'visualization', etc.)
to manage the creation, rendering of a specific part of the UI.

Third-party extensions to the insight need only to register their visualization
elements with this function for the dashboard UI to correctly recognize them
TODO: improve this

**Params**

- name `string` - name for the handler to return, register  
- \[kind\] `string` - kind for the handler  
- \[handler\] <code>[handler](#niclabs.insight..handler)</code> - callback to create the element  

**Returns**: [handler](#niclabs.insight..handler) - handler for the registered name  
<a name="niclabs.insight.dashboard"></a>
###insight.dashboard([options])
Get/construct a [Dashboard](#niclabs.insight.Dashboard)

Returns the dashboard for the namespace if options are not provided

**Params**

- \[options\] `Object` - list of configuration options for the dashboard see [Dashboard](#niclabs.insight.Dashboard)  

**Returns**: [Dashboard](#niclabs.insight.Dashboard) - dashboard object  
**Example**  
```javascript
// Create a map with the info view to the left
var dashboard = niclabs.insight.dashboard({
    'anchor': '#dashboard',
    'layout': 'left'
});
```

<a name="niclabs.insight.info(2)"></a>
###insight.info([obj])
Helper method to assign/get the information view to/from the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
**Example**  
```javascript
// Create the info view
niclabs.insight.info({
     handler: 'basic-info-view', // The view constructor
     blocks: [{
         'handler': 'summary-block', // The block constructor
         'id': '#summary',
         'title': 'My Marker Summary',
         'data': { // Default data
             'description': 'This block will show the details of the selected markers'
       },
       ignore: ['layer', 'type', 'src'] // Data elements we don't want on the block
   }]
});
```

<a name="niclabs.insight.layer(2)"></a>
###insight.layer(obj, [activate])
Helper method to add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Layer](#niclabs.insight.layer.Layer)</code> - layer id to get or configuration options for the new layer  
- \[activate=false\] `boolean` - if true, set the layer as the active layer of the dashboard  

**Returns**: `niclabs.insight.info.Layer` - - layer for the provided id  
**Example**  
```javascript
niclabs.insight.layer({
     handler: 'marker-layer',
     data: [{
         'lat': 48.8556,
         'lng': 2.2986,
         'landmark': 'Champ de Mars'
     }, {
         'lat': 48.8583,
         'lng': 2.2944,
         'landmark': 'Eiffel Tower',
         'fun-fact': 'Was built in 1889.'
     }],
     marker: {
         'type': 'image-marker',
         'src': 'antenna.svg'
     }
});
```

<a name="niclabs.insight.map(2)"></a>
###insight.map([obj])
Helper method to assign/get the map view to/from the dashboard

**Params**

- \[obj\] `Object` | <code>[MapView](#niclabs.insight.MapView)</code> - configuration for the map view or map view object  
  - handler `String` - name of the handler to construct the map view  

**Returns**: [MapView](#niclabs.insight.MapView) - the dashboard map view  
**Example**  
```javascript
// Create the map
var map = niclabs.insight.map({
     'handler': 'google-map', // Map constructor
     'lat': 48.8583,
     'lng': 2.2944,
     'zoom': 15
});
```

<a name="niclabs.insight.event"></a>
###insight.event
Very basic event manager for the dashboard

**Example**  
```javascript
// Subscribe to the event
var eventId = niclabs.insight.event.on('hello', function(who) {
     alert("HELLO "+who+"!!!");
});

// Trigger the event
niclabs.insight.event.trigger('hello', "John"); // Shows alert 'HELLO John!!!'

// Unsubscribe
niclabs.insight.event.off('hello', eventId);
```

**Members**

* [insight.event](#niclabs.insight.event)
  * [event.on(event, listener)](#niclabs.insight.event.on)
  * [event.off(event, listener)](#niclabs.insight.event.off)
  * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
  * [callback: event~listener](#niclabs.insight.event..listener)

<a name="niclabs.insight.event.on"></a>
####event.on(event, listener)
Listen for an event. A listener callback can only be assigned once for an event

**Params**

- event `string` - event type  
- listener <code>[listener](#niclabs.insight.event..listener)</code> - callback to process the event  

**Returns**: `number` - id of the listener  
<a name="niclabs.insight.event.off"></a>
####event.off(event, listener)
Stop listening for an event.

**Params**

- event `string` - event type  
- listener <code>[listener](#niclabs.insight.event..listener)</code> | `number` - callback to remove or id of the listener provided by `niclabs.insight.event.on()`  

**Returns**: `boolean` - true if the listener was found and was succesfully removed  
<a name="niclabs.insight.event.trigger"></a>
####event.trigger(event, [data])
Trigger an event

**Params**

- event `string` - event type  
- \[data\] `Object` - data to pass to the callback  

<a name="niclabs.insight.event..listener"></a>
####callback: event~listener
Insight event listener

**Params**

- data `Object` - data for the callback function, dependant on the event  

**Scope**: inner typedef of [event](#niclabs.insight.event)  
**Type**: `function`  
<a name="niclabs.insight.filter"></a>
###insight.filter
Define all possible filters for the dashboard

**Members**

* [insight.filter](#niclabs.insight.filter)
  * [class: filter.Filter](#niclabs.insight.filter.Filter)
    * [new filter.Filter(dashboard, options)](#new_niclabs.insight.filter.Filter)
    * [Filter.view.apply(element)](#niclabs.insight.filter.Filter.view.apply)
  * [class: filter.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter)
    * [new filter.GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter)
  * [class: filter.LayerSelector](#niclabs.insight.filter.LayerSelector)
    * [new filter.LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector)
    * [LayerSelector.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
  * [class: filter.SelectionFilter](#niclabs.insight.filter.SelectionFilter)
    * [new filter.SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter)
    * [SelectionFilter.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply)
    * [type: SelectionFilter.Option](#niclabs.insight.filter.SelectionFilter.Option)

<a name="niclabs.insight.filter.Filter"></a>
####class: filter.Filter
**Extends**: `niclabs.insight.View`  
**Members**

* [class: filter.Filter](#niclabs.insight.filter.Filter)
  * [new filter.Filter(dashboard, options)](#new_niclabs.insight.filter.Filter)
  * [Filter.view.apply(element)](#niclabs.insight.filter.Filter.view.apply)

<a name="new_niclabs.insight.filter.Filter"></a>
#####new filter.Filter(dashboard, options)
Defines a filter for the dashboard

A filter provides both a visual filtering representation
and an apply() function to be used on a data element for
filtering

For instance, a select filter will be visualized as a `<select>`
HTML element, and calls to apply will pass the call to the appropriate
filtering function according to the selected element

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this filter belongs to  
- options `Object` - configuration options for the filter  

**Extends**: `niclabs.insight.View`  
<a name="niclabs.insight.filter.Filter.view.apply"></a>
#####Filter.view.apply(element)
Apply the filter to a data element

**Params**

- element `Object` - data element to evaluate  

**Returns**: `boolean` - - true if the data element passes the filter  
<a name="niclabs.insight.filter.GoogleGeocodingFilter"></a>
####class: filter.GoogleGeocodingFilter
**Extends**: `niclabs.insight.filter.Filter`  
**Members**

* [class: filter.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter)
  * [new filter.GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter)

<a name="new_niclabs.insight.filter.GoogleGeocodingFilter"></a>
#####new filter.GoogleGeocodingFilter(dashboard, options)
Constructs a Google Geocoding filter for the dashboard

Application of the filter always returns true, but allows to
update the map according to a search location

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this filter belongs to  
- options `Object` - configuration options for the filter  

**Extends**: `niclabs.insight.filter.Filter`  
<a name="niclabs.insight.filter.LayerSelector"></a>
####class: filter.LayerSelector
**Extends**: `niclabs.insight.filter.Filter`  
**Members**

* [class: filter.LayerSelector](#niclabs.insight.filter.LayerSelector)
  * [new filter.LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector)
  * [LayerSelector.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)

<a name="new_niclabs.insight.filter.LayerSelector"></a>
#####new filter.LayerSelector(dashboard, options)
Construct a layer for the dashboard

The layer selector provides an option to switch between layers of the dashboard

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this filter belongs to  
- options `Object` - configuration options for the filter  

**Extends**: `niclabs.insight.filter.Filter`  
<a name="niclabs.insight.filter.LayerSelector.view.add"></a>
#####LayerSelector.view.add(id, name)
Add a layer to the selector

**Params**

- id `string` - id for the layer  
- name `name` - name of the layer  

<a name="niclabs.insight.filter.SelectionFilter"></a>
####class: filter.SelectionFilter
**Extends**: `niclabs.insight.filter.Filter`  
**Members**

* [class: filter.SelectionFilter](#niclabs.insight.filter.SelectionFilter)
  * [new filter.SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter)
  * [SelectionFilter.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply)
  * [type: SelectionFilter.Option](#niclabs.insight.filter.SelectionFilter.Option)

<a name="new_niclabs.insight.filter.SelectionFilter"></a>
#####new filter.SelectionFilter(dashboard, options)
Construct a selection filter for the dashboard

A selection filter will be visualized as a `<select>`
HTML element, and calls to apply will pass the call to the appropriate
filtering function according to the selected option

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this filter belongs to  
- options `Object` - configuration options for the filter  
  - description `string` - description for this filter to use as default option of the select  
  - options <code>[Array.&lt;Option&gt;](#niclabs.insight.filter.SelectionFilter.Option)</code> - list of options for the filter  

**Extends**: `niclabs.insight.filter.Filter`  
<a name="niclabs.insight.filter.SelectionFilter.view.apply"></a>
#####SelectionFilter.view.apply(element)
Apply the filter to a data element

**Params**

- element `Object` - data element to evaluate  

**Returns**: `boolean` - - true if the data element passes the filter  
<a name="niclabs.insight.filter.SelectionFilter.Option"></a>
#####type: SelectionFilter.Option
Selection filter option

**Params**

- name `string` - name for the option of the filter  
- filter <code>[filter](#niclabs.insight.Filters..filter)</code> - callback to filter the data  

**Type**: `Object`  
<a name="niclabs.insight.info"></a>
###insight.info
Contains the definitions for the information blocks supported by insight

**Members**

* [insight.info](#niclabs.insight.info)
  * [class: info.Block](#niclabs.insight.info.Block)
    * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
    * [Block.id](#niclabs.insight.info.Block.id)
    * [Block.element](#niclabs.insight.info.Block.element)
    * [Block.$](#niclabs.insight.info.Block.$)
    * [Block.layer](#niclabs.insight.info.Block.layer)
    * [Block.content](#niclabs.insight.info.Block.content)
    * [Block.data](#niclabs.insight.info.Block.data)
    * [Block.remove()](#niclabs.insight.info.Block.remove)
    * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
    * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
  * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
    * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
    * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
  * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
    * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)

<a name="niclabs.insight.info.Block"></a>
####class: info.Block
**Members**

* [class: info.Block](#niclabs.insight.info.Block)
  * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
  * [Block.id](#niclabs.insight.info.Block.id)
  * [Block.element](#niclabs.insight.info.Block.element)
  * [Block.$](#niclabs.insight.info.Block.$)
  * [Block.layer](#niclabs.insight.info.Block.layer)
  * [Block.content](#niclabs.insight.info.Block.content)
  * [Block.data](#niclabs.insight.info.Block.data)
  * [Block.remove()](#niclabs.insight.info.Block.remove)
  * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
  * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)

<a name="new_niclabs.insight.info.Block"></a>
#####new info.Block(dashboard, options)
Construct a information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard to which the block belongs to  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

<a name="niclabs.insight.info.Block.id"></a>
#####Block.id
id of the block

**Type**: `string`  
<a name="niclabs.insight.info.Block.element"></a>
#####Block.element
HTML DOM element for the block container

**Type**: `Element`  
<a name="niclabs.insight.info.Block.$"></a>
#####Block.$
jQuery object for info block container

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.layer"></a>
#####Block.layer
Layer id

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.content"></a>
#####Block.content
jQuery element for the content container

The content of the block is the HTML container that
comes after the block title

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.data"></a>
#####Block.data
Set/get the data for the block

**Params**

  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data.  

**Returns**: `Object` - the current data in the block or the url for the data if the data has not been loaded yet  
<a name="niclabs.insight.info.Block.remove"></a>
#####Block.remove()
Remove the block from the dashboard.
This method triggers an event to alert all elements of the
dashboard of the block removal

<a name="niclabs.insight.info.Block.__data__"></a>
#####Block.__data__([data], value)
Set/get the internal data value.

**Params**

- \[data\] `Object` | `Array.<Object>` - data for the block  
- value `Object` - for the internal data  

**Access**: protected  
<a name="niclabs.insight.info.Block.refresh"></a>
#####Block.refresh([data])
Refresh the block using the provided data

**Params**

- \[data\] `Object` - data to refresh  

<a name="niclabs.insight.info.ChartistBlock"></a>
####class: info.ChartistBlock
**Extends**: `niclabs.insight.info.Block`  
**Members**

* [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
  * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
  * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)

<a name="new_niclabs.insight.info.ChartistBlock"></a>
#####new info.ChartistBlock(dashboard, constructor, options)
Construct a new chartist information block

For the configuration options see [http://gionkunz.github.io/chartist-js/](http://gionkunz.github.io/chartist-js/)

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - parent dashboard for the block  
- constructor `Object` - chartist object to use as constructor  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - chartist <code>[Chartist](#niclabs.insight.info.ChartistBlock.Chartist)</code> - chartist configuration  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

**Extends**: `niclabs.insight.info.Block`  
<a name="niclabs.insight.info.ChartistBlock.Chartist"></a>
#####type: ChartistBlock.Chartist
Configuration options for chartist charts

**Params**

- class `Object` - chartist css class  
- labels `Object` - chart labels  
- \[options\] `Object` - chartist options  
- \[responsiveOptions\] `Object` - chartist responsive options  

**Type**: `Object`  
<a name="niclabs.insight.info.SummaryBlock"></a>
####class: info.SummaryBlock
**Extends**: `niclabs.insight.info.Block`  
**Members**

* [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
  * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)

<a name="new_niclabs.insight.info.SummaryBlock"></a>
#####new info.SummaryBlock(dashboard, options)
Construct a new summary information block
TODO: describe what is a summary information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - parent dashboard for the block  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

**Extends**: `niclabs.insight.info.Block`  
<a name="niclabs.insight.layer"></a>
###insight.layer
Visualization layers for the dashboard

**Members**

* [insight.layer](#niclabs.insight.layer)
  * [class: layer.DiagramLayer](#niclabs.insight.layer.DiagramLayer)
    * [new layer.DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer)
    * [DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
    * [DiagramLayer.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
    * [DiagramLayer.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.DiagramLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.DiagramLayer#event_layer_sumary)
  * [class: layer.GridLayer](#niclabs.insight.layer.GridLayer)
    * [new layer.GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer)
    * [GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
    * [GridLayer.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
    * [GridLayer.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.GridLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.GridLayer#event_layer_sumary)
  * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
    * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
    * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
    * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
    * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
  * [class: layer.Layer](#niclabs.insight.layer.Layer)
    * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
    * [Layer.id](#niclabs.insight.layer.Layer.id)
    * [Layer.name](#niclabs.insight.layer.Layer.name)
    * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
    * [Layer.load()](#niclabs.insight.layer.Layer.load)
    * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
    * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
    * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
    * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
    * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
    * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
    * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
    * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)

<a name="niclabs.insight.layer.DiagramLayer"></a>
####class: layer.DiagramLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.DiagramLayer](#niclabs.insight.layer.DiagramLayer)
  * [new layer.DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer)
  * [DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
  * [DiagramLayer.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
  * [DiagramLayer.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.DiagramLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.DiagramLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.DiagramLayer"></a>
#####new layer.DiagramLayer(dashboard, options)
Construct a new diagram layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[diagram\] `Object` - options for the diagram  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.DiagramLayer.layer.draw"></a>
#####DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the diagram according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.DiagramLayer.layer.clear"></a>
#####DiagramLayer.layer.clear()
Clear the diagram from the map

<a name="niclabs.insight.layer.DiagramLayer.layer.filter"></a>
#####DiagramLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.DiagramLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.DiagramLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.GridLayer"></a>
####class: layer.GridLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.GridLayer](#niclabs.insight.layer.GridLayer)
  * [new layer.GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer)
  * [GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
  * [GridLayer.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
  * [GridLayer.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.GridLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.GridLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.GridLayer"></a>
#####new layer.GridLayer(dashboard, options)
Construct a new grid Layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[grid\] `Object` - options for the grid  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.GridLayer.layer.draw"></a>
#####GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the grid according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.GridLayer.layer.clear"></a>
#####GridLayer.layer.clear()
Clear the grid from the map

<a name="niclabs.insight.layer.GridLayer.layer.filter"></a>
#####GridLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.GridLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.GridLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.HeatmapLayer"></a>
####class: layer.HeatmapLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
  * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
  * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
  * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
  * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.HeatmapLayer"></a>
#####new layer.HeatmapLayer(dashboard, options)
Construct a new heatmap layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[heatmap\] `Object` - options for the heatmap  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.HeatmapLayer.layer.draw"></a>
#####HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the heatmap according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.HeatmapLayer.layer.clear"></a>
#####HeatmapLayer.layer.clear()
Clear the heatmap from the map

<a name="niclabs.insight.layer.HeatmapLayer.layer.filter"></a>
#####HeatmapLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.HeatmapLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.HeatmapLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.Layer"></a>
####class: layer.Layer
**Members**

* [class: layer.Layer](#niclabs.insight.layer.Layer)
  * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
  * [Layer.id](#niclabs.insight.layer.Layer.id)
  * [Layer.name](#niclabs.insight.layer.Layer.name)
  * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
  * [Layer.load()](#niclabs.insight.layer.Layer.load)
  * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
  * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
  * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
  * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)

<a name="new_niclabs.insight.layer.Layer"></a>
#####new layer.Layer(dashboard, options)
Construct a layer

A layer provides a link between a data source and a visualization on the map.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - \[name=options.id\] `string` - name for the layer in the filter bar  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[summary\] `Object` | `function` - summary data  

<a name="niclabs.insight.layer.Layer.id"></a>
#####Layer.id
id of the layer

**Type**: `string`  
<a name="niclabs.insight.layer.Layer.name"></a>
#####Layer.name
Name for the layer

**Type**: `string`  
<a name="niclabs.insight.layer.Layer.data"></a>
#####Layer.data([obj])
Set/get the data for the layer

If a new source for the data is provided, this method updates the internal
data and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Params**

- \[obj\] `string` | `Array.<Object>` - optional new data source or data array for the layer  

**Returns**: `string` | `Array.<Object>` - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  
<a name="niclabs.insight.layer.Layer.load"></a>
#####Layer.load()
Load the data from the layer and redraw

If data provided as configuration to the layer is a URL, this methods loads the data from the URL and
redraws the layer (invoking [clear](#niclabs.insight.layer.Layer.clear) and [draw](#niclabs.insight.layer.Layer.draw))
when the content is available

<a name="niclabs.insight.layer.Layer.draw"></a>
#####Layer.draw(data)
Draw the layer on the map.

This method must be overriden by the implementing layers

**Params**

- data `Array.<Object>` - data to use for drawing the layer  

<a name="niclabs.insight.layer.Layer.filter"></a>
#####Layer.filter(fn)
Filter the layer according to the provided function.

This method must be overriden by the implementing layers

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.Layer.clear"></a>
#####Layer.clear()
Clear the layer changes on the map. This method must be
overriden by implementing layers

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.MarkerLayer"></a>
####class: layer.MarkerLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
  * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
  * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
  * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
  * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.MarkerLayer"></a>
#####new layer.MarkerLayer(dashboard, options)
Construct a new marker layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.MarkerLayer.layer.draw"></a>
#####MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the markers according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.MarkerLayer.layer.clear"></a>
#####MarkerLayer.layer.clear()
Clear the markers from the map

<a name="niclabs.insight.layer.MarkerLayer.layer.filter"></a>
#####MarkerLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.MarkerLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.MarkerLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.map"></a>
###insight.map
Map compatibility for the insight dashboard

**Members**

* [insight.map](#niclabs.insight.map)
  * [map.diagram](#niclabs.insight.map.diagram)
    * [diagram.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
    * [diagram.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
    * [diagram.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
    * [class: diagram.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
      * [new diagram.DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram)
      * [DelaunayDiagram.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
      * [type: DelaunayDiagram.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data)
    * [class: diagram.Diagram](#niclabs.insight.map.diagram.Diagram)
      * [new diagram.Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram)
      * [Diagram.map](#niclabs.insight.map.diagram.Diagram.map)
      * [Diagram.layer](#niclabs.insight.map.diagram.Diagram.layer)
      * [Diagram.clear()](#niclabs.insight.map.diagram.Diagram.clear)
      * [Diagram.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
    * [class: diagram.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
      * [new diagram.VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram)
      * [VoronoiDiagram.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
      * [type: VoronoiDiagram.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data)
  * [map.graph](#niclabs.insight.map.graph)
    * [class: graph.Edge](#niclabs.insight.map.graph.Edge)
      * [new graph.Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge)
    * [class: graph.GraphElement](#niclabs.insight.map.graph.GraphElement)
      * [new graph.GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement)
      * [GraphElement.map](#niclabs.insight.map.graph.GraphElement.map)
      * [GraphElement.layer](#niclabs.insight.map.graph.GraphElement.layer)
      * [GraphElement.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement)
      * [GraphElement.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
      * [GraphElement.clear()](#niclabs.insight.map.graph.GraphElement.clear)
      * [GraphElement.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible)
    * [class: graph.Node](#niclabs.insight.map.graph.Node)
      * [new graph.Node(dashboard, options)](#new_niclabs.insight.map.graph.Node)
  * [map.grid](#niclabs.insight.map.grid)
    * [class: grid.Grid](#niclabs.insight.map.grid.Grid)
      * [new grid.Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid)
      * [Grid.map](#niclabs.insight.map.grid.Grid.map)
      * [Grid.layer](#niclabs.insight.map.grid.Grid.layer)
      * [Grid.refresh](#niclabs.insight.map.grid.Grid.refresh)
      * [Grid.tile()](#niclabs.insight.map.grid.Grid.tile)
      * [Grid.clear()](#niclabs.insight.map.grid.Grid.clear)
      * [type: Grid.Data](#niclabs.insight.map.grid.Grid.Data)
      * [callback: Grid~fill](#niclabs.insight.map.grid.Grid..fill)
    * [class: grid.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
      * [new grid.HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile)
      * [HexagonTile.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin)
      * [HexagonTile.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query)
      * [HexagonTile.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices)
    * [class: grid.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
      * [new grid.HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid)
    * [class: grid.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
      * [new grid.SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid)
    * [class: grid.SquareTile](#niclabs.insight.map.grid.SquareTile)
      * [new grid.SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile)
      * [SquareTile.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin)
      * [SquareTile.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query)
      * [SquareTile.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices)
    * [class: grid.Tile](#niclabs.insight.map.grid.Tile)
      * [new grid.Tile()](#new_niclabs.insight.map.grid.Tile)
      * [Tile.origin(i, j)](#niclabs.insight.map.grid.Tile.origin)
      * [Tile.query(coord)](#niclabs.insight.map.grid.Tile.query)
      * [Tile.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices)
      * [Tile.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw)
  * [map.heatmap](#niclabs.insight.map.heatmap)
    * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
      * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
      * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
      * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
      * [Heatmap.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
    * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
      * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
      * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
      * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
    * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
      * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
      * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
      * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
  * [map.marker](#niclabs.insight.map.marker)
    * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
      * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
    * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
      * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
    * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
      * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
      * [Marker.map](#niclabs.insight.map.marker.Marker.map)
      * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
      * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
      * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
      * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
      * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
    * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
      * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
  * [type: map.LatLng](#niclabs.insight.map.LatLng)
  * [type: map.Point](#niclabs.insight.map.Point)
  * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
    * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
    * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
    * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
    * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)
  * [map.GoogleMercator](#niclabs.insight.map.GoogleMercator)

<a name="niclabs.insight.map.diagram"></a>
####map.diagram
Tools for drawing diagrams on the map. To calculate the spherical voronoi/delaunay
uses the ThirdParty libray delaunayTriangles.js

**Members**

* [map.diagram](#niclabs.insight.map.diagram)
  * [diagram.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
  * [diagram.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
  * [diagram.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
  * [class: diagram.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
    * [new diagram.DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram)
    * [DelaunayDiagram.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
    * [type: DelaunayDiagram.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data)
  * [class: diagram.Diagram](#niclabs.insight.map.diagram.Diagram)
    * [new diagram.Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram)
    * [Diagram.map](#niclabs.insight.map.diagram.Diagram.map)
    * [Diagram.layer](#niclabs.insight.map.diagram.Diagram.layer)
    * [Diagram.clear()](#niclabs.insight.map.diagram.Diagram.clear)
    * [Diagram.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
  * [class: diagram.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
    * [new diagram.VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram)
    * [VoronoiDiagram.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
    * [type: VoronoiDiagram.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data)

<a name="niclabs.insight.map.diagram.createLines"></a>
#####diagram.createLines(Positions, Verts)
Postprocess the delaunay/voronoi diagram output. Returns an array of
objects {lat:, lng:} defining the polylines to be drawn.

**Params**

- Positions `Array.<Object>` - Vectors on an unit sphere.  
- Verts `Array.<number>` - Index of vertices.  

<a name="niclabs.insight.map.diagram.SplitSegment"></a>
#####diagram.SplitSegment(p0, p1)
Split two vectors. In this way, a line can be draw as a curve.

**Params**

- p0 `Array.<float>` - Vector on an unit sphere.  
- p1 `Array.<float>` - Vector on an unit sphere.  

<a name="niclabs.insight.map.diagram.transformMapPositions"></a>
#####diagram.transformMapPositions(data)
Preprocess the data for the delaunay/voronoi diagram input.

**Params**

- data `Array.<Object>` - data point object {lat:,lng:}.  

<a name="niclabs.insight.map.diagram.DelaunayDiagram"></a>
#####class: diagram.DelaunayDiagram
**Members**

* [class: diagram.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
  * [new diagram.DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram)
  * [DelaunayDiagram.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
  * [type: DelaunayDiagram.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data)

<a name="new_niclabs.insight.map.diagram.DelaunayDiagram"></a>
######new diagram.DelaunayDiagram(dashboard, options)
Draw a delaunay triangulation over the map

In a delaunay triangulation, each data point is a location where the delaunay triangulation
is based on. A delaunay diagram is drawn with the provided configuration.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this diagram belongs to  
- options `Object` - configuration options for the diagram  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.diagram.DelaunayDiagram.Data)</code> - array of points to draw the graph  
  - \[strokeColor='#ff0000'\] `string` - Color for the diagram edges  
  - \[strokeWeight=2\] `float` - Width for the diagram edges  
  - \[strokeOpacity=1\] `float` - Opacity for the diagram edges.  

<a name="niclabs.insight.map.diagram.DelaunayDiagram.self.clear"></a>
######DelaunayDiagram.self.clear()
Clear the map

<a name="niclabs.insight.map.diagram.DelaunayDiagram.Data"></a>
######type: DelaunayDiagram.Data
Data point for DelaunayDiagram

**Params**

- lat `float` - latitude for the diagram point  
- lng `float` - longitude for the diagram point  
- landmark `string` - landmark that the point indicates  

**Type**: `Object`  
<a name="niclabs.insight.map.diagram.Diagram"></a>
#####class: diagram.Diagram
**Members**

* [class: diagram.Diagram](#niclabs.insight.map.diagram.Diagram)
  * [new diagram.Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram)
  * [Diagram.map](#niclabs.insight.map.diagram.Diagram.map)
  * [Diagram.layer](#niclabs.insight.map.diagram.Diagram.layer)
  * [Diagram.clear()](#niclabs.insight.map.diagram.Diagram.clear)
  * [Diagram.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)

<a name="new_niclabs.insight.map.diagram.Diagram"></a>
######new diagram.Diagram(dashboard, options)
Construct a Diagram over the map

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this diagram belongs to  
- options `Object` - configuration options for the diagram  

<a name="niclabs.insight.map.diagram.Diagram.map"></a>
######Diagram.map
Map view where the diagram belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.diagram.Diagram.layer"></a>
######Diagram.layer
Layer to which the diagram belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.diagram.Diagram.clear"></a>
######Diagram.clear()
Clear the diagram from the map

<a name="niclabs.insight.map.diagram.Diagram.setMap"></a>
######Diagram.setMap()
Set the map of the diagram.
TODO: can be done better?

<a name="niclabs.insight.map.diagram.VoronoiDiagram"></a>
#####class: diagram.VoronoiDiagram
**Members**

* [class: diagram.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
  * [new diagram.VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram)
  * [VoronoiDiagram.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
  * [type: VoronoiDiagram.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data)

<a name="new_niclabs.insight.map.diagram.VoronoiDiagram"></a>
######new diagram.VoronoiDiagram(dashboard, options)
Draw a voronoi diagram over the map

In a voronoi diagram, each data point is a location where the voronoi diagram
is based on. A voronoi diagram is drawn with the provided configuration.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this diagram belongs to  
- options `Object` - configuration options for the diagram  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.diagram.VoronoiDiagram.Data)</code> - array of points to draw the graph  
  - \[strokeColor='#ff0000'\] `string` - Color for the diagram edges  
  - \[strokeWeight=2\] `float` - Width for the diagram edges  
  - \[strokeOpacity=1\] `float` - Opacity for the diagram edges.  

<a name="niclabs.insight.map.diagram.VoronoiDiagram.self.clear"></a>
######VoronoiDiagram.self.clear()
Clear the map

<a name="niclabs.insight.map.diagram.VoronoiDiagram.Data"></a>
######type: VoronoiDiagram.Data
Data point for VoronoiDiagram

**Params**

- lat `float` - latitude for the diagram point  
- lng `float` - longitude for the diagram point  
- landmark `string` - landmark that the point indicates  

**Type**: `Object`  
<a name="niclabs.insight.map.graph"></a>
####map.graph
Contains all graph definitions for the dashboard

**Members**

* [map.graph](#niclabs.insight.map.graph)
  * [class: graph.Edge](#niclabs.insight.map.graph.Edge)
    * [new graph.Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge)
  * [class: graph.GraphElement](#niclabs.insight.map.graph.GraphElement)
    * [new graph.GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement)
    * [GraphElement.map](#niclabs.insight.map.graph.GraphElement.map)
    * [GraphElement.layer](#niclabs.insight.map.graph.GraphElement.layer)
    * [GraphElement.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement)
    * [GraphElement.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
    * [GraphElement.clear()](#niclabs.insight.map.graph.GraphElement.clear)
    * [GraphElement.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible)
  * [class: graph.Node](#niclabs.insight.map.graph.Node)
    * [new graph.Node(dashboard, options)](#new_niclabs.insight.map.graph.Node)

<a name="niclabs.insight.map.graph.Edge"></a>
#####class: graph.Edge
**Extends**: `niclabs.insight.map.graph.GraphElement`  
**Members**

* [class: graph.Edge](#niclabs.insight.map.graph.Edge)
  * [new graph.Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge)

<a name="new_niclabs.insight.map.graph.Edge"></a>
######new graph.Edge(dashboard, options)
Constructor for graph edges

Graph edge are shown in the map as basic segments, with no style options
TODO: make segment customizable

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this edge belongs to  
- options `Object` - configuration options for the layer  
  - adj `string` - adjacency matrix of the graph  
  - layer `string` - identifier for the layer that this edge belongs to  
  - startNode `Object` - data for the first node that this edge connects to  
  - endNode `Object` - data for the second node that this edge connects to  
  - lat `float` - latitude for the first graph node  
  - lng `float` - longitude for the first graph node  
  - landmark `string` - landmark that the first node indicates  
  - lat `float` - latitude for the second graph node  
  - lng `float` - longitude for the second graph node  
  - landmark `string` - landmark that the second node indicates  

**Extends**: `niclabs.insight.map.graph.GraphElement`  
<a name="niclabs.insight.map.graph.GraphElement"></a>
#####class: graph.GraphElement
**Members**

* [class: graph.GraphElement](#niclabs.insight.map.graph.GraphElement)
  * [new graph.GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement)
  * [GraphElement.map](#niclabs.insight.map.graph.GraphElement.map)
  * [GraphElement.layer](#niclabs.insight.map.graph.GraphElement.layer)
  * [GraphElement.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement)
  * [GraphElement.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
  * [GraphElement.clear()](#niclabs.insight.map.graph.GraphElement.clear)
  * [GraphElement.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible)

<a name="new_niclabs.insight.map.graph.GraphElement"></a>
######new graph.GraphElement(dashboard, options)
Construct a new GraphElement

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this graph element belongs to  
- options `Object` - configuration options for the layer  
  - adj `string` - adjacency matrix of the graph  
  - layer `string` - identifier for the layer that this graph element belongs to  
  - lat `float` - latitude for the graph graph element  
  - lng `float` - longitude for the graph graph element  
  - landmark `string` - landmark that the graph element indicates  

<a name="niclabs.insight.map.graph.GraphElement.map"></a>
######GraphElement.map
Map view where the map belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.graph.GraphElement.layer"></a>
######GraphElement.layer
Layer to which the graphElement belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.graph.GraphElement.graphElement"></a>
######GraphElement.graphElement()
Return the internal marker object associated with this graphElement

**Returns**:  - internal graphElement  
<a name="niclabs.insight.map.graph.GraphElement.clickable"></a>
######GraphElement.clickable([activate])
Get/activate clickable status for the graphElement

When clicked the graphElement will trigger a `niclabs.insight.MapView#map_element_selected` event
with the particular data for the graphElement

**Params**

- \[activate=true\] `boolean` - true to make clickable  

<a name="niclabs.insight.map.graph.GraphElement.clear"></a>
######GraphElement.clear()
Clear the graphElement from the map

<a name="niclabs.insight.map.graph.GraphElement.visible"></a>
######GraphElement.visible([visible])
Set/get the visibility for the graphElement

**Params**

- \[visible\] `boolean` - new value for the visibility of the graphElement  

**Returns**: `boolean` - true if the graphElement is visible  
<a name="niclabs.insight.map.graph.Node"></a>
#####class: graph.Node
**Extends**: `niclabs.insight.map.graph.GraphElement`  
**Members**

* [class: graph.Node](#niclabs.insight.map.graph.Node)
  * [new graph.Node(dashboard, options)](#new_niclabs.insight.map.graph.Node)

<a name="new_niclabs.insight.map.graph.Node"></a>
######new graph.Node(dashboard, options)
Constructor for graph nodes

Graph nodes are shown in the map as basic waypoints, with no style options

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this node belongs to  
- options `Object` - configuration options for the layer  
  - adj `string` - adjacency matrix of the graph  
  - layer `string` - identifier for the layer that this node belongs to  
  - lat `float` - latitude for the graph node  
  - lng `float` - longitude for the graph node  
  - landmark `string` - landmark that the node indicates  

**Extends**: `niclabs.insight.map.graph.GraphElement`  
<a name="niclabs.insight.map.grid"></a>
####map.grid
Contains all grids definitions for the dashboard

**Members**

* [map.grid](#niclabs.insight.map.grid)
  * [class: grid.Grid](#niclabs.insight.map.grid.Grid)
    * [new grid.Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid)
    * [Grid.map](#niclabs.insight.map.grid.Grid.map)
    * [Grid.layer](#niclabs.insight.map.grid.Grid.layer)
    * [Grid.refresh](#niclabs.insight.map.grid.Grid.refresh)
    * [Grid.tile()](#niclabs.insight.map.grid.Grid.tile)
    * [Grid.clear()](#niclabs.insight.map.grid.Grid.clear)
    * [type: Grid.Data](#niclabs.insight.map.grid.Grid.Data)
    * [callback: Grid~fill](#niclabs.insight.map.grid.Grid..fill)
  * [class: grid.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
    * [new grid.HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile)
    * [HexagonTile.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin)
    * [HexagonTile.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query)
    * [HexagonTile.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices)
  * [class: grid.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
    * [new grid.HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid)
  * [class: grid.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
    * [new grid.SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid)
  * [class: grid.SquareTile](#niclabs.insight.map.grid.SquareTile)
    * [new grid.SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile)
    * [SquareTile.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin)
    * [SquareTile.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query)
    * [SquareTile.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices)
  * [class: grid.Tile](#niclabs.insight.map.grid.Tile)
    * [new grid.Tile()](#new_niclabs.insight.map.grid.Tile)
    * [Tile.origin(i, j)](#niclabs.insight.map.grid.Tile.origin)
    * [Tile.query(coord)](#niclabs.insight.map.grid.Tile.query)
    * [Tile.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices)
    * [Tile.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw)

<a name="niclabs.insight.map.grid.Grid"></a>
#####class: grid.Grid
**Members**

* [class: grid.Grid](#niclabs.insight.map.grid.Grid)
  * [new grid.Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid)
  * [Grid.map](#niclabs.insight.map.grid.Grid.map)
  * [Grid.layer](#niclabs.insight.map.grid.Grid.layer)
  * [Grid.refresh](#niclabs.insight.map.grid.Grid.refresh)
  * [Grid.tile()](#niclabs.insight.map.grid.Grid.tile)
  * [Grid.clear()](#niclabs.insight.map.grid.Grid.clear)
  * [type: Grid.Data](#niclabs.insight.map.grid.Grid.Data)
  * [callback: Grid~fill](#niclabs.insight.map.grid.Grid..fill)

<a name="new_niclabs.insight.map.grid.Grid"></a>
######new grid.Grid(dashboard, options)
Construct an grid from the data provided.

The grid divides the visible map into equally sized tiles and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each tile is painted with a function of the point weights inside the tile

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this grid belongs to  
- options `Object` - configuration options for the grid  
  - layer `string` - identifier for the layer that this grid belongs to  
  - \[strokeColor='#000000'\] `string` - color for the stroke of each tile  
  - \[strokeOpacity=0.6\] `float` - opacity for the stroke (between 0-1)  
  - \[strokeWeight=2\] `integer` - border weight for the tile  
  - \[fill='#ffffff'\] `string` | <code>[fill](#niclabs.insight.map.grid.Grid..fill)</code> - color for the fill of the tile,
	it can have one of the following values:
 	- 'average' calculates the average of the weights in the tile and interpolates that value between the values for options.fill_start and options.fill_end
 	- 'median' calculates the median of the weights in the tile and interpolates as average
 	- rgb color (starting with '#') is used as a fixed color for all tiles
 	- a callback receiving the points in the tile and returning the value for the color  
  - \[fillStart='#ff0000'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function  
  - \[fillEnd='#00ff00'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function  
  - \[fillOpacity=0.6\] `float` - opacity for the fill of the tile  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.grid.Grid.Data)</code> - data for the grid  

<a name="niclabs.insight.map.grid.Grid.map"></a>
######Grid.map
Map view where the grid belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.grid.Grid.layer"></a>
######Grid.layer
Layer to which the grid belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.grid.Grid.refresh"></a>
######Grid.refresh
Refresh the grid with the current map bounds

<a name="niclabs.insight.map.grid.Grid.tile"></a>
######Grid.tile()
Construct a tile from the options of the grid

**Returns**: [Tile](#niclabs.insight.map.grid.Tile)  
<a name="niclabs.insight.map.grid.Grid.clear"></a>
######Grid.clear()
Remove the grid from the map

<a name="niclabs.insight.map.grid.Grid.Data"></a>
######type: Grid.Data
Data point for a grid

**Params**

- lat `float` - latitude for the data point  
- lng `float` - longitude for the data point  
- \[weight\] `float` - weight for the data point (between 0 and 1)  

**Type**: `Object`  
<a name="niclabs.insight.map.grid.Grid..fill"></a>
######callback: Grid~fill
Fill calculation function. Receives the list of points of a grid tile and
returns a color for that tile

**Params**

- points <code>[Array.&lt;Data&gt;](#niclabs.insight.map.grid.Grid.Data)</code>  
- fill `string` - color for the trile  

**Scope**: inner typedef of [Grid](#niclabs.insight.map.grid.Grid)  
**Type**: `function`  
<a name="niclabs.insight.map.grid.HexagonTile"></a>
#####class: grid.HexagonTile
**Members**

* [class: grid.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
  * [new grid.HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile)
  * [HexagonTile.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin)
  * [HexagonTile.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query)
  * [HexagonTile.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices)

<a name="new_niclabs.insight.map.grid.HexagonTile"></a>
######new grid.HexagonTile(side)
Define a hexagon tile to be drawn on the map

**Params**

- side `float` - side (or radius) of the hexagon  

<a name="niclabs.insight.map.grid.HexagonTile.self.origin"></a>
######HexagonTile.self.origin(i, j)
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
`niclabs.insight.grid.Tile.draw()`

**Params**

- i `integer` - horizontal coordinate of the tile  
- j `integer` - vertical coordinate of the tile  

**Returns**: [Point](#niclabs.insight.map.Point) - cartesian origin of the tile  
<a name="niclabs.insight.map.grid.HexagonTile.self.query"></a>
######HexagonTile.self.query(coord)
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates

See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the point in the map  

**Returns**: `Array.<integer>` - coordinates of the tile that contains the given point  
<a name="niclabs.insight.map.grid.HexagonTile.self.vertices"></a>
######HexagonTile.self.vertices(coord)
Get the vertices for the tile with origin in coordinates coord

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the tile in the map  

**Returns**: [Array.&lt;Point&gt;](#niclabs.insight.map.Point) - coordinates of the vertices of the tile  
<a name="niclabs.insight.map.grid.HexagonalGrid"></a>
#####class: grid.HexagonalGrid
**Members**

* [class: grid.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
  * [new grid.HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid)

<a name="new_niclabs.insight.map.grid.HexagonalGrid"></a>
######new grid.HexagonalGrid(dashboard, options)
Construct an hexagonal grid from the data provided.

The grid divides the visible map into hexagonal tiles of the same size and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each hexagon is painted with a function of the point weights inside the hexagon

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this grid belongs to  
- options `Object` - configuration options for the grid  
  - layer `string` - identifier for the layer that this grid belongs to  
  - size `integer` - size for the side of each hexagon (in pixels)  
  - \[strokeColor='#000000'\] `string` - color for the stroke of each hexagon  
  - \[strokeOpacity=0.6\] `float` - opacity for the stroke (between 0-1)  
  - \[strokeWeight=2\] `integer` - border weight for the hexagon  
  - \[fill='#ffffff'\] `string` | `niclabs.insight.map.grid.HexagonalGrid~fill` - color for the fill of the hexagon,
	it can have one of the following values:
 	- 'average' calculates the average of the weights in the hexagon and interpolates that value between the values for options.fill_start and options.fill_end
 	- 'median' calculates the median of the weights in the hexagon and interpolates as average
 	- rgb color (starting with '#') is used as a fixed color for all hexagons
 	- a callback receiving the points in the hexagon and returning the value for the color  
  - \[fillStart='#ff0000'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function  
  - \[fillEnd='#00ff00'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function  
  - \[fillOpacity=0.6\] `float` - opacity for the fill of the hexagon  
  - data `Array.<niclabs.insight.map.grid.HexagonalGrid.Data>` - data for the layer  

<a name="niclabs.insight.map.grid.SquareGrid"></a>
#####class: grid.SquareGrid
**Members**

* [class: grid.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
  * [new grid.SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid)

<a name="new_niclabs.insight.map.grid.SquareGrid"></a>
######new grid.SquareGrid(dashboard, options)
Construct a square grid from the data provided.

The grid divides the visible map into square tiles of the same size and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each square is painted with a function of the point weights inside the square

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this grid belongs to  
- options `Object` - configuration options for the grid  
  - layer `string` - identifier for the layer that this grid belongs to  
  - size `integer` - size for the side of each square (in pixels)  
  - \[strokeColor='#000000'\] `string` - color for the stroke of each square  
  - \[strokeOpacity=0.6\] `float` - opacity for the stroke (between 0-1)  
  - \[strokeWeight=2\] `integer` - border weight for the square  
  - \[fill='#ffffff'\] `string` | `niclabs.insight.map.grid.SquareGrid~fill` - color for the fill of the square,
	it can have one of the following values:
 	- 'average' calculates the average of the weights in the square and interpolates that value between the values for options.fill_start and options.fill_end
 	- 'median' calculates the median of the weights in the square and interpolates as average
 	- rgb color (starting with '#') is used as a fixed color for all hexagons
 	- a callback receiving the points in the square and returning the value for the color  
  - \[fillStart='#ff0000'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function  
  - \[fillEnd='#00ff00'\] `string` - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function  
  - \[fillOpacity=0.6\] `float` - opacity for the fill of the square  
  - data `Array.<niclabs.insight.map.grid.SquareGrid.Data>` - data for the layer  

<a name="niclabs.insight.map.grid.SquareTile"></a>
#####class: grid.SquareTile
**Members**

* [class: grid.SquareTile](#niclabs.insight.map.grid.SquareTile)
  * [new grid.SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile)
  * [SquareTile.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin)
  * [SquareTile.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query)
  * [SquareTile.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices)

<a name="new_niclabs.insight.map.grid.SquareTile"></a>
######new grid.SquareTile(side)
Define a square tile to be drawn on the map

**Params**

- side `float` - side (or radius) of the square  

<a name="niclabs.insight.map.grid.SquareTile.self.origin"></a>
######SquareTile.self.origin(i, j)
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
`niclabs.insight.grid.Tile.draw()`

**Params**

- i `integer` - horizontal coordinate of the tile  
- j `integer` - vertical coordinate of the tile  

**Returns**: [Point](#niclabs.insight.map.Point) - cartesian origin of the tile  
<a name="niclabs.insight.map.grid.SquareTile.self.query"></a>
######SquareTile.self.query(coord)
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates
            *

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the point in the map  

**Returns**: `Array.<integer>` - coordinates of the tile that contains the given point  
<a name="niclabs.insight.map.grid.SquareTile.self.vertices"></a>
######SquareTile.self.vertices(coord)
Get the vertices for the tile with origin in coordinates coord

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the tile in the map  

**Returns**: [Array.&lt;Point&gt;](#niclabs.insight.map.Point) - coordinates of the vertices of the tile  
<a name="niclabs.insight.map.grid.Tile"></a>
#####class: grid.Tile
**Members**

* [class: grid.Tile](#niclabs.insight.map.grid.Tile)
  * [new grid.Tile()](#new_niclabs.insight.map.grid.Tile)
  * [Tile.origin(i, j)](#niclabs.insight.map.grid.Tile.origin)
  * [Tile.query(coord)](#niclabs.insight.map.grid.Tile.query)
  * [Tile.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices)
  * [Tile.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw)

<a name="new_niclabs.insight.map.grid.Tile"></a>
######new grid.Tile()
Construct an abstract tile for the map

Tiles are used to construct grids in the map. A grid divides the world into equally sized tiles
and then draws over the map the tiles that have data inside them. If the boundaries of the map
change, the tile configuration changes.

Since a tile is part of a grid, a tile can have a horizontal and vertical cooordinate indicating their
position in the grid.

<a name="niclabs.insight.map.grid.Tile.origin"></a>
######Tile.origin(i, j)
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
`niclabs.insight.grid.Tile.draw()`

**Params**

- i `integer` - horizontal coordinate of the tile  
- j `integer` - vertical coordinate of the tile  

**Returns**: [Point](#niclabs.insight.map.Point) - cartesian origin of the tile  
<a name="niclabs.insight.map.grid.Tile.query"></a>
######Tile.query(coord)
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the point in the map  

**Returns**: `Array.<integer>` - coordinates of the tile that contains the given point  
<a name="niclabs.insight.map.grid.Tile.vertices"></a>
######Tile.vertices(coord)
Get the vertices for the tile ith origin in coordinates coord

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the tile in the map  

**Returns**: [Array.&lt;Point&gt;](#niclabs.insight.map.Point) - coordinates of the vertices of the tile  
<a name="niclabs.insight.map.grid.Tile.draw"></a>
######Tile.draw(coord, map, options)
Draw a tile in the given coordinates on the specified map view

**Params**

- coord <code>[Point](#niclabs.insight.map.Point)</code> | <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates of the tile in the map  
- map <code>[MapView](#niclabs.insight.MapView)</code> - map view to draw the tile on  
- options `Object` - configuration options for drawing the tile  
  - \[strokeColor='#000000'\] `string` - color for the stroke of each tile  
  - \[strokeOpacity=0.6\] `float` - opacity for the stroke (between 0-1)  
  - \[strokeWeight=2\] `integer` - border weight for the tile  
  - \[fillColor='#ffffff'\] `string` - color for the fill of the tile  
  - \[fillOpacity=0.6\] `float` - opacity for the fill of the tile  

**Returns**: `object` - object drawn on the map (e.g.) google maps polygon  
<a name="niclabs.insight.map.heatmap"></a>
####map.heatmap
Tools for drawing heatmaps on the map

**Members**

* [map.heatmap](#niclabs.insight.map.heatmap)
  * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
    * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
    * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
    * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
    * [Heatmap.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
  * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
    * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
    * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
    * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
  * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
    * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
    * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
    * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)

<a name="niclabs.insight.map.heatmap.Heatmap"></a>
#####class: heatmap.Heatmap
**Members**

* [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
  * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
  * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
  * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
  * [Heatmap.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)

<a name="new_niclabs.insight.map.heatmap.Heatmap"></a>
######new heatmap.Heatmap(dashboard, options)
Construct a heatmap over the map

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the heatmap  

<a name="niclabs.insight.map.heatmap.Heatmap.map"></a>
######Heatmap.map
Map view where the heatmap belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.heatmap.Heatmap.layer"></a>
######Heatmap.layer
Layer to which the heatmap belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.heatmap.Heatmap.clear"></a>
######Heatmap.clear()
Clear the heatmap from the map

<a name="niclabs.insight.map.heatmap.PointHeatmap"></a>
#####class: heatmap.PointHeatmap
**Members**

* [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
  * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
  * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
  * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)

<a name="new_niclabs.insight.map.heatmap.PointHeatmap"></a>
######new heatmap.PointHeatmap(dashboard, options)
Draw a point base heatmap over the map

In a point based heatmap, each data point is a location with an optional
weight. A heatmap point is drawn for each location with the provided configuration

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this heatmap belongs to  
- options `Object` - configuration options for the heatmap  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.PointHeatmap.Data)</code> - array of points to draw the heatmap  
  - dissipating `boolean` - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.  
  - gradient `Array.<string>` - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.  
  - radius `integer` - The radius of influence for each data point, in pixels.  
  - opacity: `float` - The opacity of the heatmap, expressed as a number between 0 and 1.  

<a name="niclabs.insight.map.heatmap.PointHeatmap.self.clear"></a>
######PointHeatmap.self.clear()
Clear the map

<a name="niclabs.insight.map.heatmap.PointHeatmap.Data"></a>
######type: PointHeatmap.Data
Data point for PointHeatmap

**Params**

- lat `float` - latitude for the heatmap point  
- lng `float` - longitude for the heatmap point  
- \[weight\] `float` - weight for the heatmap point  

**Type**: `Object`  
<a name="niclabs.insight.map.heatmap.SegmentHeatmap"></a>
#####class: heatmap.SegmentHeatmap
**Members**

* [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
  * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
  * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
  * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)

<a name="new_niclabs.insight.map.heatmap.SegmentHeatmap"></a>
######new heatmap.SegmentHeatmap(dashboard, options)
Draw a segment based heatmap over the map

In a segment based heatmap, each data segment is a set of points with an optional
weight. A heatmap segment is drawn for each location array with
the provided configuration.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this heatmap belongs to  
- options `Object` - configuration options for the heatmap  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)</code> - array of segments to draw the heatmap  
  - dissipating `boolean` - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.  
  - gradient `Array.<string>` - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.  
  - radius `integer` - The radius of influence for each data point, in pixels.  
  - opacity: `float` - The opacity of the heatmap, expressed as a number between 0 and 1.  

<a name="niclabs.insight.map.heatmap.SegmentHeatmap.self.clear"></a>
######SegmentHeatmap.self.clear()
Clear the map

<a name="niclabs.insight.map.heatmap.SegmentHeatmap.Data"></a>
######type: SegmentHeatmap.Data
Data segment for SegmentHeatmap

**Params**

- coordinates `Array.<Object>` - array of [lat,lng] coordinates  
- \[weight\] `float` - weight for the heatmap segment. Defaults to 1.  

**Type**: `Object`  
<a name="niclabs.insight.map.marker"></a>
####map.marker
Collection of markers available for drawing on the map

**Members**

* [map.marker](#niclabs.insight.map.marker)
  * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
    * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
  * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
    * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
  * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
    * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
    * [Marker.map](#niclabs.insight.map.marker.Marker.map)
    * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
    * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
    * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
    * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
    * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
  * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
    * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)

<a name="niclabs.insight.map.marker.CircleMarker"></a>
#####class: marker.CircleMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
  * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)

<a name="new_niclabs.insight.map.marker.CircleMarker"></a>
######new marker.CircleMarker(dashboard, options)
Constructor for circle markers

Circle markers are drawn in the map as circular waypoints

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  
  - lat `float` - latitude for the marker  
  - lng `float` - longitude for the marker  
  - landmark `string` - landmark that the marker indicates  
  - \[radius=400\] `number` - radius for the circle  
  - \[strokeColor='#ff0000'\] `string` - color for the circle perimenter line  
  - \[strokeOpacity=0.8\] `float` - opacity for the circle perimeter line  
  - \[fillColor='#ff0000'\] `string` - color for the circle filling  
  - \[fillOpacity=0.35\] `float` - opacity for the circle filling  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.marker.ImageMarker"></a>
#####class: marker.ImageMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
  * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)

<a name="new_niclabs.insight.map.marker.ImageMarker"></a>
######new marker.ImageMarker(dashboard, options)
Constructor for an image marker

An image marker includes an image for each waypoint

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  
  - lat `float` - latitude for the marker  
  - lng `float` - longitude for the marker  
  - landmark `string` - landmark that the marker indicates  
  - src `string` - image source  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.marker.Marker"></a>
#####class: marker.Marker
**Members**

* [class: marker.Marker](#niclabs.insight.map.marker.Marker)
  * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
  * [Marker.map](#niclabs.insight.map.marker.Marker.map)
  * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
  * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
  * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
  * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
  * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)

<a name="new_niclabs.insight.map.marker.Marker"></a>
######new marker.Marker(dashboard, options)
Construct a new marker

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  
  - lat `float` - latitude for the marker  
  - lng `float` - longitude for the marker  
  - landmark `string` - landmark that the marker indicates  

<a name="niclabs.insight.map.marker.Marker.map"></a>
######Marker.map
Map view where the map belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.marker.Marker.layer"></a>
######Marker.layer
Layer to which the marker belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.marker.Marker.marker"></a>
######Marker.marker()
Return the internal marker object associated with this Marker

**Returns**: `google.maps.Marker` - internal marker  
<a name="niclabs.insight.map.marker.Marker.clickable"></a>
######Marker.clickable([activate])
Get/activate clickable status for the marker

When clicked the marker will trigger a `niclabs.insight.MapView#map_element_selected` event
with the particular data for the marker

**Params**

- \[activate=true\] `boolean` - true to make clickable  

<a name="niclabs.insight.map.marker.Marker.clear"></a>
######Marker.clear()
Clear the marker from the map

<a name="niclabs.insight.map.marker.Marker.visible"></a>
######Marker.visible([visible])
Set/get the visibility for the marker

**Params**

- \[visible\] `boolean` - new value for the visibility of the marker  

**Returns**: `boolean` - true if the marker is visible  
<a name="niclabs.insight.map.marker.SimpleMarker"></a>
#####class: marker.SimpleMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
  * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)

<a name="new_niclabs.insight.map.marker.SimpleMarker"></a>
######new marker.SimpleMarker(dashboard, options)
Constructor for simple markers

Simple markers are shown in the map as basic waypoints, with no style options

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  
  - lat `float` - latitude for the marker  
  - lng `float` - longitude for the marker  
  - landmark `string` - landmark that the marker indicates  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.LatLng"></a>
####type: map.LatLng
Object to represent geographic coordinates

**Properties**

- lat `float` - latitude  
- lng `float` - longitude  

**Type**: `Object`  
<a name="niclabs.insight.map.Point"></a>
####type: map.Point
Cartesian coordinates

**Properties**

- x `float` - horizontal coordinate  
- y `float` - vertical coordinate  

**Type**: `Object`  
<a name="niclabs.insight.map.GoogleMap"></a>
####class: map.GoogleMap
**Extends**: `niclabs.insight.MapView`  
**Members**

* [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
  * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
  * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
  * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
  * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)

<a name="new_niclabs.insight.map.GoogleMap"></a>
#####new map.GoogleMap(options)
Constructor of GoogleMap

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

**Extends**: `niclabs.insight.MapView`  
<a name="niclabs.insight.map.GoogleMap.map.zoom"></a>
#####GoogleMap.map.zoom([zoom])
Set/get the zoom level for the map

Overrides the functionality of niclabs.insight.MapView.zoom() by modifying
the underlying google map zoom level as well

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="niclabs.insight.map.GoogleMap.map.center"></a>
#####GoogleMap.map.center([lat], [lng])
Set/get the map center.

Overrides the functionality of [center](#niclabs.insight.MapView.center) by modifying
the underlying google map center as well

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [LatLng](#niclabs.insight.map.LatLng) - coordinates for the map center  
<a name="niclabs.insight.map.GoogleMap#event_map_element_selected"></a>
#####event: "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Properties**

- layer `string` - id for the layer to which the data belongs to  
- lat `float` - latitude for the marker  
- lng `float` - latitude for the marker  

**Type**: `object`  
<a name="niclabs.insight.quadtree"></a>
###insight.quadtree
Quadtree implementation

**Members**

* [insight.quadtree](#niclabs.insight.quadtree)
  * [type: quadtree.Point](#niclabs.insight.quadtree.Point)
  * [class: quadtree.Bounds](#niclabs.insight.quadtree.Bounds)
    * [new quadtree.Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds)
    * [Bounds.center](#niclabs.insight.quadtree.Bounds.center)
    * [Bounds.min](#niclabs.insight.quadtree.Bounds.min)
    * [Bounds.max](#niclabs.insight.quadtree.Bounds.max)
    * [Bounds.contains(point)](#niclabs.insight.quadtree.Bounds.contains)
    * [Bounds.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects)
  * [class: quadtree.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
    * [new quadtree.PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree)
    * [PointQuadTree.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity)
    * [PointQuadTree.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds)
    * [PointQuadTree.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert)
    * [PointQuadTree.query(range)](#niclabs.insight.quadtree.PointQuadTree.query)

<a name="niclabs.insight.quadtree.Point"></a>
####type: quadtree.Point
A cartesian point

**Params**

- x `float` - horizontal coordinates  
- y `float` - vertical coordinates  

**Type**: `Object`  
<a name="niclabs.insight.quadtree.Bounds"></a>
####class: quadtree.Bounds
**Members**

* [class: quadtree.Bounds](#niclabs.insight.quadtree.Bounds)
  * [new quadtree.Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds)
  * [Bounds.center](#niclabs.insight.quadtree.Bounds.center)
  * [Bounds.min](#niclabs.insight.quadtree.Bounds.min)
  * [Bounds.max](#niclabs.insight.quadtree.Bounds.max)
  * [Bounds.contains(point)](#niclabs.insight.quadtree.Bounds.contains)
  * [Bounds.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects)

<a name="new_niclabs.insight.quadtree.Bounds"></a>
#####new quadtree.Bounds(min, max)
Construct an axis aligned bounding box with the corners
at the provided coordinates

**Params**

- min <code>[Point](#niclabs.insight.quadtree.Point)</code> - minimal coordinates of the bounding box (e.g. lower left corner if zero is at the lower left corner of the canvas)  
- max <code>[Point](#niclabs.insight.quadtree.Point)</code> - maximal coordinates of the bounding box (e.g. upper right corner if zero is at the lower left corner of the canvas)  

<a name="niclabs.insight.quadtree.Bounds.center"></a>
#####Bounds.center
Center of the bounding box

**Type**: [Point](#niclabs.insight.quadtree.Point)  
<a name="niclabs.insight.quadtree.Bounds.min"></a>
#####Bounds.min
Minimal coordinates of the bounding box
(e.g. lower left corner if zero is at the lowest leftmost corner of the canvas)

**Type**: [Point](#niclabs.insight.quadtree.Point)  
<a name="niclabs.insight.quadtree.Bounds.max"></a>
#####Bounds.max
Maximal coordinates of the bounding box
(e.g. upper right corner if zero is at the lowest leftmost corner of the canvas)

**Type**: [Point](#niclabs.insight.quadtree.Point)  
<a name="niclabs.insight.quadtree.Bounds.contains"></a>
#####Bounds.contains(point)
Check if this bounding box contains the given point.

As a convention, a bounding box contains all points inside its borders
as well as all the points in the east and south borders.

**Params**

- point <code>[Point](#niclabs.insight.quadtree.Point)</code> - point to lookup  

**Returns**: `boolean` - true if the box contains the point  
<a name="niclabs.insight.quadtree.Bounds.intersects"></a>
#####Bounds.intersects(box)
Check if this bounding box intersects the given bounding box

**Params**

- box <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> - bounding box to check intersection with  

**Returns**: `boolean` - true if the boxes intersect in at least one point  
<a name="niclabs.insight.quadtree.PointQuadTree"></a>
####class: quadtree.PointQuadTree
**Members**

* [class: quadtree.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
  * [new quadtree.PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree)
  * [PointQuadTree.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity)
  * [PointQuadTree.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds)
  * [PointQuadTree.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert)
  * [PointQuadTree.query(range)](#niclabs.insight.quadtree.PointQuadTree.query)

<a name="new_niclabs.insight.quadtree.PointQuadTree"></a>
#####new quadtree.PointQuadTree(bounds, [capacity], [depth])
Construct a Point Quadtree

See [http://en.wikipedia.org/wiki/Quadtree](http://en.wikipedia.org/wiki/Quadtree)

**Params**

- bounds <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> - bounding box for the quadtree  
- \[capacity=50\] `integer` - number of points that each node in the quadtree accepts before dividing  
- \[depth=40\] `integer` - max depth of the quadtree  

<a name="niclabs.insight.quadtree.PointQuadTree.capacity"></a>
#####PointQuadTree.capacity
Capacity for the quadtree

**Type**: `integer`  
<a name="niclabs.insight.quadtree.PointQuadTree.bounds"></a>
#####PointQuadTree.bounds
Boundary of the quadtree

**Type**: [Bounds](#niclabs.insight.quadtree.Bounds)  
<a name="niclabs.insight.quadtree.PointQuadTree.insert"></a>
#####PointQuadTree.insert(point)
Insert a new point in the quadtree

**Params**

- point <code>[Point](#niclabs.insight.quadtree.Point)</code> - new point to insert  

**Returns**: `boolean` - true if the point could be inserted (point belongs in the bounds of the quadtree)  
<a name="niclabs.insight.quadtree.PointQuadTree.query"></a>
#####PointQuadTree.query(range)
Return all the points in the specified bounding box

**Params**

- range <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> - spatial range to search  

**Returns**: [Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point) - list of points in the given range  
<a name="niclabs.insight..handler"></a>
###callback: insight~handler
Constructs an insight element (visualization, layer, etc.)

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - to assign to the handler  
- options `Object` - configuration options for the handler, depending on the kind  

**Scope**: inner typedef of [insight](#niclabs.insight)  
**Type**: `function`  
<a name="niclabs.insight.Dashboard"></a>
###class: insight.Dashboard
**Members**

* [class: insight.Dashboard](#niclabs.insight.Dashboard)
  * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
  * [Dashboard.element](#niclabs.insight.Dashboard.element)
  * [Dashboard.$](#niclabs.insight.Dashboard.$)
  * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
  * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
  * [Dashboard.layout()](#niclabs.insight.Dashboard.layout)
  * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
  * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
  * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
  * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
  * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
  * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
  * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)

<a name="new_niclabs.insight.Dashboard"></a>
####new insight.Dashboard(options)
Constructs the dashboard

The dashboard is composed of multiple, replaceable parts.
- An information view, with conveys information to the user, throught visualizations or text.
the information view can be composed contain multiple blocks of information
- A map view, which provides the geospatial information to the user. The map and the information view can interact for
 clearer information
- A filter bar, which allows to interact with the data shown in the map, through filtering or modifying the location
- A notification bar, usually invisible, which reports events back to the user

**Params**

- options `Object` - configuration options for the dashboard  
  - \[layout='none'\] `string` - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it  
  - anchor `string` - Required id for anchoring the dashboard  
  - geocoding `boolean` - false to disable geocoding  

<a name="niclabs.insight.Dashboard.element"></a>
####Dashboard.element
HTML DOM element for the dashboard container

**Type**: `Element`  
<a name="niclabs.insight.Dashboard.$"></a>
####Dashboard.$
jQuery object for the dashboard DOM container

**Type**: `jQuery`  
<a name="niclabs.insight.Dashboard.config"></a>
####Dashboard.config(name)
Return the value for the dashboard configuration option with the provided name

**Params**

- name `String` - name of the configuration option  

**Returns**: `*` - configuration option value or undefined if it does not exist  
<a name="niclabs.insight.Dashboard.info"></a>
####Dashboard.info([obj])
Assign/get the information view for the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
<a name="niclabs.insight.Dashboard.layout"></a>
####Dashboard.layout()
Assign/get the layout for the dashboard

**Returns**: `String` - the layout of the dashboard  
<a name="niclabs.insight.Dashboard.map"></a>
####Dashboard.map([obj])
Assign/get the map view for the dashboard

**Params**

- \[obj\] `Object` | <code>[MapView](#niclabs.insight.MapView)</code> - configuration for the map view or map view object  
  - handler `String` - name of the handler to construct the map view  

**Returns**: [MapView](#niclabs.insight.MapView) - the dashboard information view  
<a name="niclabs.insight.Dashboard.layer"></a>
####Dashboard.layer(obj, [activate])
Add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Layer](#niclabs.insight.layer.Layer)</code> - layer id to get or configuration options for the new layer  
- \[activate=false\] `boolean` - if true, set the layer as the active layer of the dashboard  

**Returns**: `niclabs.insight.info.Layer` - - layer for the provided id  
<a name="niclabs.insight.Dashboard.data"></a>
####Dashboard.data([obj])
Set/get the data for the active layer

If a new source for the data is provided, this method updates the internal
data for the layer and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Params**

- \[obj\] `string` | `Array.<Object>` - optional new data source or data array for the layer  

**Returns**: `string` | `Array.<Object>` - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  
<a name="niclabs.insight.Dashboard.active"></a>
####Dashboard.active([id])
Set/get the active layer

**Params**

- \[id\] `string` | `number` - id for the layer to set as the active layer  

**Returns**: `string` - id for the active layer  
<a name="niclabs.insight.Dashboard.filter"></a>
####Dashboard.filter(filter)
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Params**

- filter `Object` | `number` - configuration for the filter or filter index  

**Returns**: `jQuery` - reference to the added element for further customization  
**Example**  
```javascript
dashboard.filter({
 description: 'Landmark', // the empty string is used if not provided
 options: [
     {name: 'Not Eiffel Tower', filter: function(data) { return data.landmark.indexOf("Eiffel") < 0; }},
     {name: 'Not Champ de Mars', filter: function(data) { return data.landmark.indexOf("Mars") < 0; }},
 ]
});
```

<a name="niclabs.insight.Dashboard.clear"></a>
####Dashboard.clear()
Clear the map by calling the [clear](#niclabs.insight.layer.Layer.clear) method
on the active layer

<a name="niclabs.insight.Dashboard#event_active_layer_data"></a>
####event: "active_layer_data"
Event triggered when an update to the active layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.Filters"></a>
###class: insight.Filters
**Extends**: `niclabs.insight.View`  
**Members**

* [class: insight.Filters](#niclabs.insight.Filters)
  * [new insight.Filters(dashboard, options)](#new_niclabs.insight.Filters)
  * [Filters.view.filter(obj)](#niclabs.insight.Filters.view.filter)
  * [callback: Filters~filter](#niclabs.insight.Filters..filter)
  * [event: "filter_selected"](#niclabs.insight.Filters#event_filter_selected)
  * [event: "filter_changed"](#niclabs.insight.Filters#event_filter_changed)

<a name="new_niclabs.insight.Filters"></a>
####new insight.Filters(dashboard, options)
Constructs a filter bar for the dashboard

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this view belongs to  
- options `Object` - configuration options for the filters  

**Extends**: `niclabs.insight.View`  
<a name="niclabs.insight.Filters.view.filter"></a>
####Filters.view.filter(obj)
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Params**

- obj `Object` | <code>[Filter](#niclabs.insight.filter.Filter)</code> | `number` - configuration for the filter or filter identifier  

**Returns**: `jQuery` - reference to the added element for further customization  
<a name="niclabs.insight.Filters..filter"></a>
####callback: Filters~filter
Function to act as a filter for the data

The function returns false if the data must be removed from the visualization
or true if the data must be kept

**Params**

- element `Object` - data element to evaluate  

**Scope**: inner typedef of [Filters](#niclabs.insight.Filters)  
**Type**: `function`  
**Returns**: `boolean` - true if the data passes the filter  
<a name="niclabs.insight.Filters#event_filter_selected"></a>
####event: "filter_selected"
Event triggered when a filter has been selected

It serves to communicate to the filters view that one of its filters has changed

**Type**: [Filter](#niclabs.insight.filter.Filter)  
<a name="niclabs.insight.Filters#event_filter_changed"></a>
####event: "filter_changed"
Event triggered when a filter has changed

It will pass as parameter the filtering function to apply to
the layers

**Type**: [filter](#niclabs.insight.Filters..filter)  
<a name="niclabs.insight.MapView"></a>
###class: insight.MapView
**Members**

* [class: insight.MapView](#niclabs.insight.MapView)
  * [new insight.MapView(options)](#new_niclabs.insight.MapView)
  * [MapView.element](#niclabs.insight.MapView.element)
  * [MapView.$](#niclabs.insight.MapView.$)
  * [MapView.lat](#niclabs.insight.MapView.lat)
  * [MapView.lng](#niclabs.insight.MapView.lng)
  * [MapView.width](#niclabs.insight.MapView.width)
  * [MapView.height](#niclabs.insight.MapView.height)
  * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
  * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
  * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)

<a name="new_niclabs.insight.MapView"></a>
####new insight.MapView(options)
Constructs a new map

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

<a name="niclabs.insight.MapView.element"></a>
####MapView.element
HTML DOM element for the map view

**Type**: `Element`  
<a name="niclabs.insight.MapView.$"></a>
####MapView.$
jQuery object for map view

**Type**: `jQuery`  
<a name="niclabs.insight.MapView.lat"></a>
####MapView.lat
Latitude for the map center

**Type**: `float`  
<a name="niclabs.insight.MapView.lng"></a>
####MapView.lng
Longitude for the map center

**Type**: `float`  
<a name="niclabs.insight.MapView.width"></a>
####MapView.width
Width for the map container

**Type**: `float`  
<a name="niclabs.insight.MapView.height"></a>
####MapView.height
Height for the map container

**Type**: `float`  
<a name="niclabs.insight.MapView.center"></a>
####MapView.center([lat], [lng])
Set/get the map center.
Overriding implementations should modify this method so the
map reflects the new center.

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [LatLng](#niclabs.insight.map.LatLng) - coordinates for the map center  
<a name="niclabs.insight.MapView.zoom"></a>
####MapView.zoom([zoom])
Set/get the map zoom level.
Overriding implementations should modify this method so the
map reflects the new zoom.

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="niclabs.insight.MapView#event_map_element_selected"></a>
####event: "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Properties**

- layer `string` - id for the layer to which the data belongs to  
- lat `float` - latitude for the marker  
- lng `float` - latitude for the marker  

**Type**: `object`  
<a name="niclabs.insight.ElementList"></a>
###class: insight.ElementList
**Extends**: `niclabs.insight.Element`  
**Members**

* [class: insight.ElementList](#niclabs.insight.ElementList)
  * [new insight.ElementList(dashboard)](#new_niclabs.insight.ElementList)
  * [ElementList.self.element(obj)](#niclabs.insight.ElementList.self.element)
  * [ElementList.self.each(iterator)](#niclabs.insight.ElementList.self.each)
  * [ElementList.self.remove(id)](#niclabs.insight.ElementList.self.remove)
  * [callback: ElementList~iterator](#niclabs.insight.ElementList..iterator)

<a name="new_niclabs.insight.ElementList"></a>
####new insight.ElementList(dashboard)
Construct a list of dashboard elements.

In a list, children can be added either by passing the object directly
to the `niclabs.insight.ElementList.element()` method or by passing the options
for constructing the [Element](#niclabs.insight.Element), including the name of the handler.

The list will lookup the handler in the list of registered handlers and
use it to construct the element

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard where the list belongs to  

**Extends**: `niclabs.insight.Element`  
<a name="niclabs.insight.ElementList.self.element"></a>
####ElementList.self.element(obj)
Add/get an element from the list

- If a number or string is provided as value for obj, the element with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new element
is created using the handler and the element is added to the list
- If an object is provided without handler, it is assumed to be a valid insight Element and added to the
list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Element](#niclabs.insight.Element)</code> - element id to get or configuration options for the new element  

**Returns**: [ElementList](#niclabs.insight.ElementList) - - newly created element  
<a name="niclabs.insight.ElementList.self.each"></a>
####ElementList.self.each(iterator)
Iterate over the elements of the list

The iteration is stopped when the iterating function returns false

**Params**

- iterator <code>[iterator](#niclabs.insight.ElementList..iterator)</code>  

<a name="niclabs.insight.ElementList.self.remove"></a>
####ElementList.self.remove(id)
Delete the element with specified id from the list

**Params**

- id `string` | `integer` - identifier for the element  

**Returns**: [Element](#niclabs.insight.Element) - removed element  
<a name="niclabs.insight.ElementList..iterator"></a>
####callback: ElementList~iterator
Process a list element

**Params**

- key `string` - key for the element  
- element <code>[Element](#niclabs.insight.Element)</code> - object associated to the provided key  

**Scope**: inner typedef of [ElementList](#niclabs.insight.ElementList)  
**Type**: `function`  
<a name="niclabs.insight.Element"></a>
###class: insight.Element
**Members**

* [class: insight.Element](#niclabs.insight.Element)
  * [new insight.Element(options)](#new_niclabs.insight.Element)
  * [Element.id](#niclabs.insight.Element.id)

<a name="new_niclabs.insight.Element"></a>
####new insight.Element(options)
Construct a generic insight element

**Params**

- options `Object` - configuration options for the element  
  - id `String` - identifier for the element  

<a name="niclabs.insight.Element.id"></a>
####Element.id
Identifier for the insight element

**Type**: `string`  
<a name="niclabs.insight.InfoView"></a>
###class: insight.InfoView
**Extends**: `niclabs.insight.View`  
**Members**

* [class: insight.InfoView](#niclabs.insight.InfoView)
  * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
  * [InfoView.element.block(obj)](#niclabs.insight.InfoView.element.block)

<a name="new_niclabs.insight.InfoView"></a>
####new insight.InfoView(dashboard, options)
Construct the dashboard information view

The information view is composed of information blocks to show
different aspects of the data shown in the map or
about the visualization in general

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard to assign this info view to  
- options `Object` - list of configuration options for the information view  

**Extends**: `niclabs.insight.View`  
<a name="niclabs.insight.InfoView.element.block"></a>
####InfoView.element.block(obj)
Add/get a block from the info view

- If a number or string is provided as value for obj, the block with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new block
is created using the handler and the block is added to the list of
blocks of the info view
- If an object is provided without handler, it is assumed to be a Block object and added to the
block list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Block](#niclabs.insight.info.Block)</code> - block id to get or configuration options for the new block  

**Returns**: [Block](#niclabs.insight.info.Block) - - newly created block  
<a name="niclabs.insight.View"></a>
###class: insight.View
**Extends**: `niclabs.insight.Element`  
**Members**

* [class: insight.View](#niclabs.insight.View)
  * [new insight.View(options)](#new_niclabs.insight.View)
  * [View.$](#niclabs.insight.View.$)
  * [View.element](#niclabs.insight.View.element)
  * [View.self.append(element)](#niclabs.insight.View.self.append)

<a name="new_niclabs.insight.View"></a>
####new insight.View(options)
Construct a View

A view has an internal DOM representation to
display on the browser

**Params**

- options `Object` - configuration options for the element  
  - id `String` - identifier for the element  

**Extends**: `niclabs.insight.Element`  
<a name="niclabs.insight.View.$"></a>
####View.$
DOM Element specified by this View

**Type**: `jQuery`  
<a name="niclabs.insight.View.element"></a>
####View.element
DOM Element specified by this View

**Type**: `jQuery`  
<a name="niclabs.insight.View.self.append"></a>
####View.self.append(element)
Append an element to the DOM tree of this view

**Params**

- element <code>[View](#niclabs.insight.View)</code> - element to append  

**Returns**: [View](#niclabs.insight.View) - reference to this element  
