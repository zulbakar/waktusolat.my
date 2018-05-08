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
    var token = 'token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlcyI6WyJhZG1pbmlzdHJhdG9ycyIsImNhbl9lZGl0X2VudGl0eSIsImNhbl9lZGl0X3dvcmtmbG93IiwiZGV2ZWxvcGVycyJdLCJlbWFpbCI6MTU0ODg5MjgwMCwic3ViIjoiNzQxNmEyOTQtZDMwMy00YTA4LWEzNDktNmIwMmU0ZTJlNjgyIiwibmJmIjoxNDc2OTMyMjY2LCJpYXQiOjE0NjExMjEwNjYsImV4cCI6MTU0ODg5MjgwMCwiYXVkIjoicnhnZW5lcmljIn0.hMq4Sltyy_24DWzVD8rJHJYPgG7Emp5EdCBrESLlNOk';
    //var urlbase = 'http://waktusolat.alimoosha.com';
    var urlbase = '.';
    return {

      getState: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-state.php',
          headers: { 'Authorization': token },
          params:paramsObj
        };
        return $http(config);
      },
      getZone: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-zone.php',
          headers: { 'Authorization': token },
          params:paramsObj
        };
        return $http(config);
      },
      getMonth: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-month.php',
          headers: { 'Authorization': token },
          params:paramsObj
        };
        return $http(config);
      },
      getResult: function (paramsObj) {
        var config = {
          method:'GET',
          url:urlbase + '/api/get/get-result.php',
          headers: { 'Authorization': token },
          params:paramsObj
        };
        return $http(config);
      }
      
    };

  }]);
