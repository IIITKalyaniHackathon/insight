/**
 * Insight is a generic web dashboard for smart city projects.
 *
 * It allows to combine different chart and visualization tools to better
 * understand what is going on in the city
 *
 * @namespace
 * @requires jQuery 1.11.1+
 */
niclabs.insight = (function($) {
    "use strict";


    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.io/#x15.4.4.18
    if (!Array.prototype.forEach) {

        Array.prototype.forEach = function(callback, thisArg) {

            var T, k;

            if (this === null) {
                throw new TypeError(' this is null or not defined');
            }

            // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
            var O = Object(this);

            // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = O.length >>> 0;

            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }

            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }

            // 6. Let k be 0
            k = 0;

            // 7. Repeat, while k < len
            while (k < len) {

                var kValue;

                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (k in O) {

                    // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                    kValue = O[k];

                    // ii. Call the Call internal method of callback with T as the this value and
                    // argument list containing kValue, k, and O.
                    callback.call(T, kValue, k, O);
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined
        };
    }

    /**
     * Bind a jquery element to a template
     *
     * It binds the callback 'render' to a function that will render
     * an associative array into the element by using the data-bind
     * attributes
     *
     * You can use the attributes `data-bind` and `data-if`
     * indicate binding or dependency from a data element
     *
     * @example
     * ```html
     * <script id='template' type='text/html'>
     * Hello <span data-bind="name">friend</span><span data-if="name">!!!</span>,
     * this is a template <span data-if="app">for </span><i data-bind="app">your app</i>
     * </script>
     * <script type='text/html'>
     * $('#element').template('#template'); // Will show "Hello, this is a template"
     * $('#content').trigger('render', {name: 'John', app: 'John\'s App'}); // Updates content to "Hello John!!!, this is a template for John's app"
     * </script>
     * ```
     *
     * @param {string|jQuery} template - id for the template element, string with the template or jQuery selector to use as template
     * @returns {jQuery} this element
     */
    $.fn.template = function(template) {
        if (typeof template === 'undefined') template = this.html();
        else if (typeof template === 'string' && template.charAt(0) === '#') {
            template = $(template).html();
        }

        var $element = this;

        // Define the render() function
        this.bind('render', function(event, data) {
            $element.empty().append(template);

            // Get elements with data bindings
            $element.find('[data-bind],[data-if]').each(function() {
                var key = $(this).attr('data-bind') || $(this).attr('data-if');

                var tag = $(this).prop('tagName');
                if (key in data) {
                    if ($(this).attr('data-bind')) {
                        if (tag === 'img') $(this).attr('src', data[key]);
                        else if (tag === 'input') $(this).val(data[key]);
                        else $(this).text(data[key]);
                    }
                } else {
                    $(this).detach();
                }
            });
        });

        return this;
    };

    /**
     * Initial required configurations
     */

    /**
     * JQuery plugin to make an element resizable
     * TODO: missing documentation/source
     */
    $.fn.resizable = function(orientation) {
        var resizer = $('<div>').addClass('resizer').addClass(orientation + '-resize');
        this.append(resizer).addClass('resizable');

        resizer.on('mousedown', initDrag);

        var startX, startY, startWidth, startHeight;

        var resizable = this;

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = resizable.outerWidth();
            startHeight = resizable.outerHeight();

            $(document).on('mousemove', doDrag);
            $(document).on('mouseup', stopDrag);
        }

        var east, south, north, west;
        south = orientation.search("s") >= 0;
        east = orientation.search("e") >= 0;
        north = orientation.search("n") >= 0;
        west = orientation.search("w") >= 0;

        function doDrag(e) {
            if (south)
                resizable.css('height', (startHeight + e.clientY - startY) + 'px');
            if (east)
                resizable.css('width', (startWidth + e.clientX - startX) + 'px');
            if (north)
                resizable.css('top', (e.clientY) + 'px')
                .css('height', (startHeight + startY - e.clientY) + 'px');
            if (west)
                resizable.css('width', (startWidth - e.clientX + startX) + 'px');
        }

        function stopDrag(e) {
            $(document).off('mousemove', doDrag);
            $(document).off('mouseup', stopDrag);
            resizable.trigger('resize');
        }

        this.scroll(function(e) {
            resizer.css('top', resizable.scrollTop());
        });

        return this;
    };

    /**
     * Set the id for the jQuery selector
     */
    $.fn.setID = function(selector) {
        if (selector.charAt(0) === '#')
            selector = selector.slice(1);
        this.attr('id', selector);
        return this;
    };

    /**
     * JQuery plugin to make an element movable
     * TODO: missing documentation/source
     */
    $.fn.movable = function() {

        var panel = this.children('.header');
        if (panel.length === 0) {
            panel = $('<div>').addClass('header');
            this.prepend(panel);
        }

        var up = $('<span>').addClass('button').attr('data-icon', 'up-arrow');
        var down = $('<span>').addClass('button').attr('data-icon', 'down-arrow');
        panel.append(up);
        panel.append(down);

        var _this = this;

        up.on('click', function() {
            _this.insertBefore(_this.prev());
        });

        down.on('click', function() {
            _this.insertAfter(_this.next());
        });

        return this;
    };

    /**
     * JQuery plugin to make an element closeable
     * TODO: Missing documentation
     */
    $.fn.closable = function(handler) {
        if (!handler) {
            handler = function() {
                return;
            };
        }

        var panel = this.children('.header');
        if (!panel.length) {
            panel = $('<span>').addClass('header');
            this.prepend(panel);
        }

        var close = $('<span>').addClass('button').attr('data-icon', 'close');

        panel.prepend(close);

        var _this = this;

        close.on('click', function() {
            _this.remove();
            $('#insight-map-view').width($('#insight-dashboard').innerWidth());
            handler();
        });

        return this;
    };

    /**
     * JQuery plugin to make an element hide-able
     * TODO: Missing documentation
     */
    $.fn.hidable = function() {
        var handler = false;
        if (!handler) {
            handler = function() {
                return;
            };
        }

        var panel = this;

        var closeCard = $('<div>')
            .addClass('mdl-card mdl-shadow--2dp')
            .css('min-height', 0);

        var closeButton = $('<button>')
            .addClass('mdl-button mdl-js-button mdl-js-ripple-effect')
            .css('z-index', 2)
            .css('background', 'white');

        var closeIcon = $('<i>')
            .addClass('material-icons')
            .addClass('hide-show-icon')
            .html('expand_less');

        var openCard = $('<div>')
            .addClass('mdl-card mdl-shadow--2dp')
            .css('min-height', 0);

        var openButton = $('<button>')
            .addClass('mdl-button mdl-js-button mdl-js-ripple-effect')
            .css('z-index', 2)
            .css('background', 'white');

        var openIcon = $('<i>')
            .addClass('material-icons')
            .addClass('hide-show-icon')
            .html('expand_more');

        $(closeButton).append(closeIcon);
        $(closeCard).append(closeButton);
        $(openButton).append(openIcon);
        $(openCard).append(openButton);

        var buttonHolder = $('<div>')
            .append(closeCard)
            .setID('insight-show-hide-button');

        panel.prepend(buttonHolder);

        var opener = function() {

            $('.block').css('z-index', 2);
            $('.filters').css('z-index', 2);
            $('#insight-dashboard').parent().css('overflow-y', 'auto');

            $('#insight-map-view').width($('#insight-dashboard').innerWidth());
            $('#insight-map-view').height($('#insight-dashboard').parent().height());

            buttonHolder.prepend(closeCard);
            openCard.remove();

            handler();
            //This is needed
            closeButton.on('click', closer);

        };

        var closer = function() {

            $('.block').css('z-index', -1);
            $('.filters').css('z-index', -1);
            $('#insight-dashboard').parent().css('overflow-y', 'hidden');

            $('#insight-map-view').width($('#insight-dashboard').parent().innerWidth());
            $('#insight-map-view').height($('#insight-dashboard').parent().height());

            buttonHolder.prepend(openCard);
            closeCard.remove();

            handler();
            //This is needed
            openButton.on('click', opener);

        };

        openButton.on('click', opener);
        closeButton.on('click', closer);

        return this;
    };

    /**
     * Check if indexOf exists in Array.prototype or use jQuery.inArray();
     */
    Array.prototype.indexOf = 'indexOf' in Array.prototype ? Array.prototype.indexOf : function(item, start) {
        return $.inArray(item, this, start);
    };

    /**
     * Calculate the size of the associative array
     */
    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    /*
     * object.watch polyfill
     *
     * 2012-04-03
     *
     * By Eli Grey, http://eligrey.com
     * Public Domain.
     *
     * Modified by Nenad Damnjanović
     * Nov 9, 2014
     *
     * Source: https://gist.github.com/flackjap/f318e6a2b316e4d9fa44
     *
     * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     */

    // object.watch
    if (!Object.prototype.watch) {
        Object.defineProperty(Object.prototype, "watch", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function(prop, handler) {
                var
                    oldval = this[prop],
                    getter = function() {
                        return oldval;
                    },
                    setter = function(newval) {
                        if (oldval !== newval) {
                            handler.call(this, prop, oldval, newval);
                            oldval = newval;
                        } else {
                            return false;
                        }
                    };

                if (delete this[prop]) { // can't watch constants
                    Object.defineProperty(this, prop, {
                        get: getter,
                        set: setter,
                        enumerable: true,
                        configurable: true
                    });
                }
            }
        });
    }

    if (!Object.prototype.unwatch) {
        Object.defineProperty(Object.prototype, "unwatch", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function(prop) {
                var val = this[prop];
                delete this[prop]; // remove accessors
                this[prop] = val;
            }
        });
    }


    /**
     * Spy an object using Object.watch
     */
    if (!Object.prototype.spy) {
        Object.defineProperty(Object.prototype, "spy", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function(handler) {
                for (var prop in this) {
                    // Watch all the object properties
                    if (this.hasOwnProperty(prop)) {
                        this.watch(prop, handler);
                    }
                }
            }
        });
    }

    if (!Object.prototype.unspy) {
        Object.defineProperty(Object.prototype, "unspy", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function() {
                for (var prop in this) {
                    // Watch all the object properties
                    if (this.hasOwnProperty(prop)) {
                        this.unwatch(prop);
                    }
                }
            }
        });
    }

    /**
     *
     * Example usage:
     *
     *
    	var o = {p: 1};

    	o.spy(function (id, oldval, newval) {
    	    console.log( "o." + id + " changed from " + oldval + " to " + newval );
    	    return newval;
    	});

    	o.p = 2; // should log the change
    	o.p = 2; // should do nothing
     */

    var dashboard;

    // Store dashboard handlers by name
    var handlers = {};

    /**
     * Constructs an insight element (visualization, layer, etc.)
     *
     * @callback niclabs.insight~handler
     * @param {niclabs.insight.Dashboard} dashboard to assign to the handler
     * @param {Object} options - configuration options for the handler, depending on the kind
     */

    return {
        /**
         * Register a handler of a specific insight element ('layer', 'visualization', etc.)
         * to manage the creation, rendering of a specific part of the UI.
         *
         * Third-party extensions to the insight need only to register their visualization
         * elements with this function for the dashboard UI to correctly recognize them
         * TODO: improve this
         *
         * @memberof niclabs.insight
         * @param {string} name - name for the handler to return, register
         * @param {string=} kind - kind for the handler
         * @param {niclabs.insight~handler=} handler - callback to create the element
         * @returns {niclabs.insight~handler} handler for the registered name
         */
        handler: function(name, kind, handler) {
            if (name in handlers) {
                kind = typeof kind === 'undefined' ? handlers[name].kind : kind;
                handler = typeof handler === 'undefined' ? handlers[name].handler : handler;

                if (kind !== handlers[name].kind) {
                    throw new Error('There already exists a handler with name ' + name + ' for kind ' + handlers[name].kind);
                }
            } else if (typeof kind === 'undefined' && typeof handler === 'undefined') {
                throw new Error('Handler ' + name + ' does not exist');
            }

            handlers[name] = {
                'kind': kind,
                'handler': handler
            };
            return handler;
        },

        /**
         * Get/construct a {@link niclabs.insight.Dashboard}
         *
         * Returns the dashboard for the namespace if options are not provided
         *
         * @example
         * ```javascript
         * // Create a map with the info view to the left
         * var dashboard = niclabs.insight.dashboard({
         *     'anchor': '#dashboard',
         *     'layout': 'left'
         * });
         * ```
         *
         * @memberof niclabs.insight
         * @param {Object=} options - list of configuration options for the dashboard see {@link niclabs.insight.Dashboard}
         * @returns {niclabs.insight.Dashboard} dashboard object
         */
        dashboard: function(options) {
            if (typeof options === 'undefined') return dashboard;

            dashboard = niclabs.insight.Dashboard(options);
            return dashboard;
        },

    };
})(jQuery);
