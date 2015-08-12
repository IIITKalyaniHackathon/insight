niclabs.insight.info.Block = (function($) {
    "use strict";

    /**
     * Construct a information block
     *
     * @class niclabs.insight.info.Block
     * @param {niclabs.insight.Dashboard} dashboard - dashboard to which the block belongs to
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
    var constructor = function(dashboard, options) {
        if (!('id' in options)) {
            throw new Error("All information blocks must have an id");
        }

        var id = options.id;
        var htmlId = id.charAt(0) === '#' ? id : '#' + id;
        var title = options.title || '';

        var properties = {
            closable: typeof options.closable === 'undefined'? true : options.closable,
            movable: typeof options.movable === 'undefined'? true : options.movable,
        };
        var preprocess = options.preprocess || function(x) {return x;};

        // placing
        var header = $('<div>').addClass('header').append($('<span>').attr('data-bind', 'title').addClass('title').append(title));

        var container = $('<div>').setID(htmlId)
            .addClass('mdl-card')
            .addClass('mdl-shadow--2dp')
            .append(header);

        if(dashboard.layout() == 'right') {
            container.addClass('right');
        }

        // Save the content element
        var content = $('<div>').addClass('content');


        /*container.html(
        '<div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">Update</h2>
         </div><div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
         </div>
         <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">View Updates</a>
         </div>');*/
        // Append the content
        container.append(content);

        /**
         * Remove the block from the dashboard.
         * This method triggers an event to alert all elements of the
         * dashboard of the block removal
         *
         * @memberof niclabs.insight.info.Block
         */
        function remove() {
            // Trigger the block removal
            niclabs.insight.event.trigger('remove-block', {
                'id': id
            });
        }

        // Make the block closable
        if (properties.closable) {
            container.closable(function() {
                // Remove the block
                remove();
            });
        }

        // Make the block movable
        if (properties.movable) {
            container.movable();
        }

        // Add the properties to the block style
        container.css(properties);

        var mapListener;
        var layerListener;

        // Listen to events
        function listen(self, layer) {
            // Listen for map events
            mapListener = niclabs.insight.event.on('map_element_selected', function(data) {
                if (layer && data.layer !== layer) return;
                self.refresh(self.__data__(data));
            });

            // Listen for summary events
            layerListener = niclabs.insight.event.on('layer_summary', function(summary) {
                if (layer && summary.id !== layer) return;
                self.refresh(self.__data__(summary.data));
            });
        }

        // Stop listening
        function unlisten(self) {
            niclabs.insight.event.off('map_element_selected', mapListener);
            niclabs.insight.event.off('layer_summary', layerListener);
        }

        // checkbox handling
        // TODO: this is not a generic functionality?
        // var checkbox_handler = options['checkbox-handler'] || function (a, d) { return d; };
        //
        // if (options.checkbox)
        //     this.addCheckbox(options.checkbox);

        var data = {};
        var layer;
        var self = {
            /**
             * id of the block
             * @memberof niclabs.insight.info.Block
             * @member {string}
             */
            get id () {
                return id;
            },

            /**
             * HTML DOM element for the block container
             *
             * @memberof niclabs.insight.info.Block
             * @member {Element}
             */
            get element () {
                var c = $(htmlId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for info block container
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get $ () {
                var c = $(htmlId);
                container = c.length === 0 ? container : c;
                return container;
            },

            /**
             * Layer id
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get layer () {
                return layer;
            },

            /**
             * jQuery element for the content container
             *
             * The content of the block is the HTML container that
             * comes after the block title
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get content() {
                var c = $(htmlId).find('.content');
                content = c.length === 0 ? content: c;
                return content;
            },

            /**
             * Get set the title for the block
             *
             * @param {string=} newtitle - new title for the block
             * @returns {string} the updated value for the block title
             */
            title: function(newtitle) {
                if (typeof newtitle !== 'undefined') {
                    title = newtitle;
                    self.$.find('.title').text(newtitle);
                }
                return title;
            },

            /**
             * Set/get the internal data value.
             *
             * @access protected
             * @memberof niclabs.insight.info.Block
             * @param {Object|Object[]} [data] - data for the block
             * @param {Object} value for the internal data
             */
            __data__: function(obj) {
                if (typeof obj === 'undefined') return data;

                // If the object is empty we cleanup the internal data
                if (Object.keys(obj).length === 0)
                    data = {};
                else
                    data = preprocess(obj);

                return data;
            },

            /**
             * Trigger the removal of the block
             */
            remove: remove,

            /**
             * Set/get the data for the block
             *
             * @memberof niclabs.insight.info.Block
             * @name data
             * @param {Object|Object[]|Function|String} [options.data] - data for the block,
             *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
             *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
             *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
             *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
             *  options.defaults can be used to set the default data.
             * @returns {Object} the current data in the block or the url for the data if the data has not been loaded yet
             */
            data: function(obj) {
                if (typeof obj === 'undefined') return data;

                // Unset the layer
                layer = undefined;

                // Stop listening for events
                unlisten(self);

                if (typeof obj === 'string') {
                    if (obj.charAt(0) === '#') {
                        layer = obj.substring(1);
                        data = options.defaults || {};

                        // Listen for map events
                        listen(self, layer);

                        return data;
                    }

                    // Assume the string is a URL
                    $.getJSON(obj, self.__data__);
                    return obj; // TODO: what should we return?
                }

                if (typeof obj === 'function')
                    return self.__data__(obj.call(self));

                return self.__data__(obj);
            },

            /**
             * Refresh the block using the provided data
             *
             * @memberof niclabs.insight.info.Block
             * @abstract
             * @param {Object=} data - data to refresh
             */
            refresh: function (data) {
            },
        };

        if ('data' in options) {
            self.data(options.data);
        }
        else  {
            // Listen for all events
            listen(self);

            // Set default value
            data = options.defaults || {};
        }

        return self;
    };

    return constructor;
})(jQuery);

// CityDashboard.Visualization.prototype = {
//     addCheckbox: function (keys) {
//         //keys: {name1:true,name2:false,name3:true,...}
//         //each element of the object indicates the label of each checkbox. The number of keys indicates the number of checboxes.
//         //handler :  function ([true, false, true, ...],data)
//         //each element of the array corresponds to each checkbox state.
//
//         var checkpanel = $("<span>").addClass('checkbox-panel');
//
//         var arr = [];
//
//         for (var key in keys) {
//             var checkbox = $('<input>').attr('type', 'checkbox');
//
//             arr[arr.length] = checkbox[0].checked = keys[key];
//             checkpanel.append(checkbox);
//
//             var _this = this;
//
//             checkbox.on('change', function () {
//
//                 var array = $(this).parent().children('input:checkbox').map(function () {
//                     return $(this).prop('checked');
//                 }).get();
//
//                 _this.getData = function () {
//                     var clone = _this.data;
//                     if (!(_this.data instanceof Array))
//                         clone = jQuery.extend({}, _this.data);
//                     return _this.checkbox_handler(array, clone);
//                 };
//
//                 _this.refresh();
//
//             })
//
//             checkbox.after($('<label>').text(key));
//         }
//
//         this.viz.append(checkpanel);
//
//         _this.getData = function () {
//             var clone = _this.data;
//             if (!(_this.data instanceof Array))
//                 clone = jQuery.extend({}, _this.data);
//             return _this.checkbox_handler(arr, clone);
//         };
//     }
//
// };
