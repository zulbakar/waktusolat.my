'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:resultPopupToday
 * @description
 * # resultPopupToday
 */
angular.module('waktusolatmyApp')
  .component('resultPopupToday', {
    templateUrl: 'views/result-popup-today.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: ['$log', 'waktuSolatService',
      function resultresultPopupTodayPopup($log,waktuSolatService) {
        var $ctrl = this;
        $ctrl.Zones = [];

        $ctrl.$onInit = function () {
          $ctrl.getZones();
        };

        $ctrl.getZones = function () {

          waktuSolatService.getZone({ 'state': $ctrl.resolve.SearchObj.state, 'zone': $ctrl.resolve.SearchObj.zone }).then(function (resp) {

            // $log.log('getZones', resp.data.results);
            $ctrl.Zones = resp.data.results;

          }, function (err) {
            $log.log('Error in getZones');

          });

        };

        $ctrl.ok = function () {
          $ctrl.close();
        };

        $ctrl.cancel = function () {
          $ctrl.dismiss();
        };

      }]
  });

