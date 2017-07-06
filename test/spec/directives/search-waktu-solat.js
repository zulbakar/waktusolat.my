'use strict';

describe('Directive: searchWaktuSolat', function () {

  // load the directive's module
  beforeEach(module('waktusolatmyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-waktu-solat></search-waktu-solat>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchWaktuSolat directive');
  }));
});
