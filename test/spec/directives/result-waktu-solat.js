'use strict';

describe('Directive: resultWaktuSolat', function () {

  // load the directive's module
  beforeEach(module('waktusolatmyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<result-waktu-solat></result-waktu-solat>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resultWaktuSolat directive');
  }));
});
