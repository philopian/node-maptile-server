'use strict';

angular.module('customTilesApp')
	.controller('MapViewCtrl', function($scope) {

		/* create leaflet map */
		var map = L.map('map', {
			center: [39.5, -98.35],
			zoom: 4,
			minZoom: 0,
			maxZoom: 8
		});
		new L.tileLayer('http://localhost:8080/road-trip/{z}/{x}/{y}.png', {}).addTo(
			map);

	});
