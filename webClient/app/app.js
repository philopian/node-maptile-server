'use strict';

angular.module('customTilesApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
        .otherwise('/');

    //$locationProvider.html5Mode(true);
});