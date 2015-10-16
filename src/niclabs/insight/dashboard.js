niclabs.insight.Dashboard = (function($) {
    "use strict";

    /**
     * Constructs the dashboard
     *
     * The dashboard is composed of multiple, replaceable parts.
     * - An information view, with conveys information to the user, throught visualizations or text.
     * the information view can be composed contain multiple blocks of information
     * - A map view, which provides the geospatial information to the user. The map and the information view can interact for
     *  clearer information
     * - A filter bar, which allows to interact with the data shown in the map, through filtering or modifying the location
     * - A notification bar, usually invisible, which reports events back to the user
     *
     * @class niclabs.insight.Dashboard
     * @param {Object} options - configuration options for the dashboard
     * @param {string} [options.layout='none'] - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it
     * @param {string} options.anchor - Required id for anchoring the dashboard
     * @param {boolean} options.geocoding - false to disable geocoding
     */
    return function(options) {
        var layoutOptions = ['left', 'right', 'none'];
        var dashboardId = "#insight-dashboard";
        var layerCounter = 0;

        if (!('anchor' in options)) throw new Error('Anchor id is required for creating a dashboard');
        var anchor = options.anchor;

        $(anchor).css('overflow-y', 'auto');

        options.layout = options.layout || 'none';
        if (layoutOptions.indexOf(options.layout) < 0) throw new Error('Layout must be one of \'' + layoutOptions.join('\',\'') + '\'');

        // Create the main container
        var main = $('<div>');

        var container = $('<div>')
            .setID(dashboardId)
            .addClass('mdl-grid');


        // Append the dashboard to the container
        $(anchor).append(container);

        var layers = {};
        var numberedLayers = 0;
        var activeLayer;

        var data = {};

        /**
         * Get a new layer id for a layer without id
         */
        function layerId(index) {
            index = typeof index === 'undefined' ? numberedLayers++ : index;
            return 'layer' + index;
        }

        var infoView = {};
        var mapView = {};

        var infoPanel = $('<div>')
            .setID('insight-info-view')
            .addClass('insight-info-view mdl-cell mdl-cell--4-col-phone mdl-cell--3-col-tablet mdl-cell--4-col-desktop');

        if (options.layout == 'right') {
            $(infoPanel).css('text-align', '-webkit-right');
        }

        var descriptionPanel = $('<div>')
            .setID('insight-description-view')
            .addClass('mdl-card mdl-shadow--2dp block');

        var descriptionTitle = $('<div>')
            .addClass('mdl-card__title mdl-card--expand mdl-color--blue-600')
            .append($('<h2>')
                .addClass('mdl-card__title-text insight-info-view__title')
                .html('Insight'));

        var descriptionSubTitle = $('<div>')
            .addClass('mdl-card__supporting-text mdl-color--blue-600 insight-info-view__subtitle')
            .append($('<p>')
                .html('Information about myself. More information here and here.'));

        var tabHolder = $('<div>')
            .addClass('mdl-grid mdl-grid--no-spacing');

        var tabs = $('<div>')
            .setID('insight-tabs')
            .addClass('mdl-tabs mdl-js-tabs mdl-js-ripple-effect')
            .append($('<a>')
                .attr('href', '#insight-info-tab')
                .addClass('mdl-tabs__tab is-active')
                .html('Information'))
            .append($('<a>')
                .attr('href', '#insight-filter-tab')
                .addClass('mdl-tabs__tab')
                .html('Filters'));

        tabs.click(function(){
            $('#insight-map-view').width($('#insight-dashboard').innerWidth());
        });

        var informationTab = $('<div>')
            .setID('insight-info-tab')
            .addClass('mdl-tabs__panel is-active');

        var filterTab = $('<div>')
            .setID('insight-filter-tab')
            .addClass('mdl-tabs__panel');

        $(dashboardId).append(infoPanel);
        $(infoPanel).prepend(descriptionPanel);
        $(descriptionPanel).append(descriptionTitle);
        $(descriptionPanel).append(descriptionSubTitle);

        $(tabs).append(informationTab, filterTab);
        $(tabHolder).append(tabs);
        $(descriptionPanel).append(tabHolder);

        var emptyPanel = $('<div>')
            .setID('insight-empty-view')
            .addClass('mdl-cell mdl-cell--4-col-phone mdl-cell--5-col-tablet mdl-cell--8-col-desktop');

        if (options.layout == 'left') {
            $(dashboardId).append(emptyPanel);
        }
        if (options.layout == 'right') {
            $(dashboardId).prepend(emptyPanel);
        }

        // Listen for changes in the layer data
        niclabs.insight.event.on('layer_data', function(obj) {
            if (activeLayer && obj.id === activeLayer.id) {
                /**
                 * Event triggered when an update to the active layer data (filtering/update) has ocurred
                 *
                 * @event niclabs.insight.Dashboard#active_layer_data
                 * @type {object}
                 * @property {string} id - id for the layer to which the data belongs to
                 * @property {Object[]} data - new data array
                 */
                niclabs.insight.event.trigger('active_layer_data', obj);
            }
        });

        // Create the filter bar
        var filters = niclabs.insight.Filters(self);

        // Append the default filter bar
        filterTab.append(filters.element);

        // Make the panel hidable
        $(infoPanel).hidable(options.layout);

        var currentFilter = function() {
            return true;
        };

        // Create an event to be notified of a filter change
        niclabs.insight.event.on('filter_changed', function(f) {
            currentFilter = f;
            activeLayer.filter(currentFilter);
        });

        var self = {
            /**
             * HTML DOM element for the dashboard container
             *
             * @memberof niclabs.insight.Dashboard
             * @member {Element}
             */
            get element() {
                return $(dashboardId)[0];
            },

            /**
             * jQuery object for the dashboard DOM container
             *
             * @memberof niclabs.insight.Dashboard
             * @member {jQuery}
             */
            get $() {
                return $(dashboardId);
            },

            /**
             * Return the value for the dashboard configuration option with the provided name
             *
             * @memberof niclabs.insight.Dashboard
             * @param {String} name - name of the configuration option
             * @returns {*} configuration option value or undefined if it does not exist
             */
            config: function(name) {
                return options[name];
            },

            /**
             * Assign/get the information view for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
             * @param {String} obj.handler - name of the handler to construct the info view
             * @returns {niclabs.insight.InfoView} the dashboard information view
             */
            info: function(obj) {
                if (typeof obj !== 'undefined') {
                    if ('handler' in obj) {
                        infoView = niclabs.insight.handler(obj.handler)(self, obj);
                    } else {
                        infoView = obj;
                    }

                    $(informationTab).append(infoView.element);

                }
                return infoView;
            },

            /**
             * Assign/get the layout for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @returns {String} the layout of the dashboard
             */
            layout: function() {
                return options.layout;
            },

            /**
             * Assign/get the map view for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|niclabs.insight.MapView} [obj] - configuration for the map view or map view object
             * @param {String} obj.handler - name of the handler to construct the map view
             * @returns {niclabs.insight.MapView} the dashboard information view
             */
            map: function(obj) {
                if (typeof obj !== 'undefined') {
                    if ('handler' in obj) {
                        mapView = niclabs.insight.handler(obj.handler)(self, obj);
                    } else {
                        mapView = obj;
                    }
                    $(dashboardId).prepend(mapView.element);
                    //TODO: add this to the css
                    $(mapView.element)
                        .width($(dashboardId).width())
                        .height($('body').height());


                    if (options.geocoding !== false) {
                        // Append the GeoCoder
                        if ('googlemap' in mapView) {
                            var geocoder = niclabs.insight.filter.GoogleGeocodingFilter(self, {
                                id: 'geocoder'
                            });
                            $(descriptionSubTitle).append(geocoder.$);
                        }
                    }
                }
                return mapView;
            },

            /**
             * Add/get a {@link niclabs.insight.layer.Layer} for the dashboard
             *
             * A layer acts as a link between a source of data and a visualization on the map
             *
             * - If a number or string is provided as value for obj, the layer with that id is returned
             * - If a generic object is provided with the handler defined in the 'handler' property, a new layer
             * is created using the handler and the layer is added to the list of
             * layers of the dashboard
             * - If an object is provided without handler, it is assumed to be a Layer object and added to the
             * layer list as is.
             *
             * @memberof niclabs.insight.Dashboard
             * @param {string|number|Object| niclabs.insight.layer.Layer} obj - layer id to get or configuration options for the new layer
             * @param {boolean} [activate=false] - if true, set the layer as the active layer of the dashboard
             * @returns {niclabs.insight.info.Layer} - layer for the provided id
             */
            layer: function(obj, activate) {
                if (typeof obj == 'string') return layers[obj];
                if (typeof obj == 'number') return layers[layerId(obj)];

                var lyr, id;
                if ('handler' in obj) {
                    id = obj.id = obj.id || layerId();
                    lyr = niclabs.insight.handler(obj.handler)(self, obj);
                } else {
                    lyr = obj;
                    id = lyr.id;
                }

                layers[id] = lyr;

                // Switch to the new layer if activate is true
                if (activate || Object.size(layers) === 1) self.active(id);

                // Add the layer to the selector
                layerSelector.add(lyr.id, lyr.name);
                layerCounter = layerCounter+1;

                return lyr;
            },

            /**
             * Add a {@link niclabs.insight.data.DataSource} for the dashboard
             *
             * A data source is a collection of elements to be proccesed on the dashboard
             *
             * - If a generic object is provided with the handler defined in the 'handler' property, a new dataSource
             * is created using the handler and the dataSource is added to the list of
             * dataSources of the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object} obj - configuration options for the new dataSource
             * @returns {niclabs.insight.data.DataSource} - dataSource for the provided id
             */
            dataSource: function(obj) {
                var dataSrc;
                if ('handler' in obj) {
                    dataSrc = niclabs.insight.handler(obj.handler)(self, obj);
                } else {
                    throw new Error("No handler specified");
                }

                data[obj.id] = dataSrc;

                return dataSrc;
            },

            // /**
            //  * Set/get the data for the active layer
            //  *
            //  * If a new source for the data is provided, this method updates the internal
            //  * data for the layer and reloads the layer by calling {@link niclabs.insight.layer.Layer.load}
            //  *
            //  * @memberof niclabs.insight.Dashboard
            //  * @param {string|Object[]} [obj] - optional new data source or data array for the layer
            //  * @returns {string|Object[]} data source for the layer if the data has not been loaded yet or object array if the
            //  *  data has been loaded
            //  */
            // data: function(obj) {
            //     if (activeLayer) return activeLayer.data(obj);
            //     return [];
            // },

            /**
             * Set/get the active layer
             *
             * @memberof niclabs.insight.Dashboard
             * @param {string|number} [id] - id for the layer to set as the active layer
             * @returns {string} id for the active layer
             */
            active: function(id) {
                if (typeof id === 'undefined') return typeof activeLayer !== 'undefined' ? activeLayer.id : undefined;

                if (typeof activeLayer !== 'undefined') {
                    activeLayer.clear();
                }

                if (typeof id == 'number') id = layerId(id);

                if (!(id in layers)) {
                    throw new Error("Layer with id " + id + " does not exist");
                }

                // Update the active layer
                activeLayer = layers[id];

                // Load the new active layer
                activeLayer.load();

                // Apply the filter
                activeLayer.filter(currentFilter);

                return activeLayer;
            },

            /**
             * Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
             * of the filter for further customizations
             *
             * @example
             * ```javascript
             * dashboard.filter({
             *  description: 'Landmark', // the empty string is used if not provided
             *  options: [
             *      {name: 'Not Eiffel Tower', filter: function(data) { return data.landmark.indexOf("Eiffel") < 0; }},
             *      {name: 'Not Champ de Mars', filter: function(data) { return data.landmark.indexOf("Mars") < 0; }},
             *  ]
             * });
             * ```
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|number} filter configuration for the filter or filter index
             * @return {jQuery} reference to the added element for further customization
             */
            filter: function(filter) {
                return filters.filter(filter);
            },

            /**
             * Clear the map by calling the {@link niclabs.insight.layer.Layer.clear} method
             * on the active layer
             *
             * @memberof niclabs.insight.Dashboard
             */
            clear: function() {
                if (activeLayer) activeLayer.clear();
            }
        };

        var layerSelector = niclabs.insight.filter.LayerSelector(self, {
            id: 'layer-selector'
        });
        filters.filter(layerSelector);

        return self;
    };
})(jQuery);
