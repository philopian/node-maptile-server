'use strict';

describe('Controller: MapViewCtrl', function () {

  // load the controller's module
  beforeEach(module('customTilesApp'));

  var MapViewCtrl, 
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapViewCtrl = $controller('MapViewCtrl', {
      $scope: scope
    });
  }));


  it('should ...', function () {
    expect(1).toEqual(1);
  });


  it('should attach a list of things to the scope', function () {
    expect(scope.awesomeThings.length).toBe(10);
  });


});

