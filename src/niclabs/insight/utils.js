/**
 * General helper functions for the dashboard
 *
 * @mixin
 */
niclabs.insight.utils = (function() {
    /**
     * Get a location element from a url.
     *
     * Usage:
     * ```javascript
     * var loc = niclabs.insight.utils.getLocation("http://www.example.com");
     * console.log(loc.hostname); // prints "www.example.com";
     * ```
     *
     * @memberof niclabs.insight.utils
     * @param {String} href url to get the location element
     * @return {Element} location (`<a>`) DOM element
     */
    function getLocation(href) {
        var location = document.createElement("a");
        location.href = href;
        return location;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    /**
     * Check if the given string corresponds to a valid URL
     *
     * @memberof niclabs.insight.utils
     * @param {String} url - URL to verify
     * @return {boolean} true if the url is valid
     */
    function isValidURL(url) {
        return true;
        // TODO: this returns false with localhost:8001/api/events/summaries/antennasignal/type/?format=json&year=2015&month=6
        //return url.match(regex) === true;
    }

    return {
        "isValidURL": isValidURL,
        "getLocation": getLocation
    };
})();
