'use strict';

describe('Directive: waktuSolatMain', function () {

  // load the directive's module
  beforeEach(module('waktusolatmyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<waktu-solat-main></waktu-solat-main>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the waktuSolatMain directive');
  }));
});
