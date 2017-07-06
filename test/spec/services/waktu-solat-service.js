'use strict';

describe('Service: waktuSolatService', function () {

  // load the service's module
  beforeEach(module('waktusolatmyApp'));

  // instantiate service
  var waktuSolatService;
  beforeEach(inject(function (_waktuSolatService_) {
    waktuSolatService = _waktuSolatService_;
  }));

  it('should do something', function () {
    expect(!!waktuSolatService).toBe(true);
  });

});
