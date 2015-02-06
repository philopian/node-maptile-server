'use strict';

angular.module('customTilesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mapView', {
        url: '/',
        templateUrl: 'app/mapView/mapView.html',
        controller: 'MapViewCtrl'
      });
  });