'use strict';

/**
 * @ngdoc service
 * @name waktusolatmyApp.waktuSolatService
 * @description
 * # waktuSolatService
 * Factory in the waktusolatmyApp.
 */
angular.module('waktusolatmyApp')
  .factory('waktuSolatService', ['$http', function ($http) {

    // Public API here
    //var urlbase = 'http://waktusolat.alimoosha.com';
    var urlbase = '.';
    return {

      getState: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-state.php',
          params:paramsObj
        };
        return $http(config);
      },
      getZone: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-zone.php',
          params:paramsObj
        };
        return $http(config);
      },
      getMonth: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-month.php',
          params:paramsObj
        };
        return $http(config);
      },
      getResult: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-result.php',
          params:paramsObj
        };
        return $http(config);
      },
      getToday: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-today.php',
          params:paramsObj
        };
        return $http(config);
      }
      
    };

  }]);
