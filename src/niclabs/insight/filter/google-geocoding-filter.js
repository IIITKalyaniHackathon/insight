niclabs.insight.filter.GoogleGeocodingFilter = (function(google) {
    /**
     * Constructs a Google Geocoding filter for the dashboard
     *
     * Application of the filter always returns true, but allows to
     * update the map according to a search location
     *
     * @class niclabs.insight.filter.GoogleGeocodingFilter
     * @augments niclabs.insight.filter.Filter
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     */
    var GoogleGeocodingFilter = function(dashboard, options) {
        var filter = niclabs.insight.filter.Filter(dashboard, options);

        if (!('googlemap' in dashboard.map()))
            throw new Error("Sorry, Google Geocoding can only be used with Google Maps");

        /* Google maps geocoder and search bar*/
        var geocoder = new google.maps.Geocoder();

        // Create the search box
        var search = $('<input>')
            .addClass('search')
            .attr('type', 'search')
            .attr('placeholder', 'Enter location');

        // Append search box to the filter
        filter.$.append(search);

        var geocode = function() {
            var map = dashboard.map().googlemap();
            var address = search.val();
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    // map.setZoom(12);
                    map.fitBounds(results[0].geometry.bounds);
                } else {
                    // TODO: this message should go in a status bar
                    search.val('not found: ' + address);
                }
            });
        };

        search.on('change', geocode);


        return filter;
    };

    // Register the handler
    niclabs.insight.handler('google-geocoder', 'filter', GoogleGeocodingFilter);

    return GoogleGeocodingFilter;
})(google);
