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
    return {

      getState: function (paramsObj) {
        var config = {
          method:'GET',
          url:'./api/get/get-state.php',
          params:paramsObj
        };
        return $http(config);
      },
      getZone: function (paramsObj) {
        var config = {
          method:'GET',
          url:'./api/get/get-zone.php',
          params:paramsObj
        };
        return $http(config);
      }
      
    };

  }]);
