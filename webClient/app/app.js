'use strict';

angular.module('CustomTilesApp', [
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