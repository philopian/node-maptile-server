'use strict';

angular.module('customTilesApp')
.controller('MapViewCtrl', function ($scope,BASE_URL) {

    /* create leaflet map */
    var map = L.map('map', {
        center: [39.5, -98.35],
        zoom: 4,
        minZoom: 0,
        maxZoom: 8
    });
    var maptileUrl = BASE_URL.url+':'+BASE_URL.port'/road-trip/{z}/{x}/{y}.png';
    new L.tileLayer(maptileUrl, {}).addTo(map);

});
