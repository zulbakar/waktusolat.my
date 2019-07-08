'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:resultPopup
 * @description
 * # resultPopup
 */
angular.module('waktusolatmyApp')
  .component('resultPopup', {
    templateUrl: 'views/result-popup.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: ['$log','waktuSolatService',
      function resultPopup($log,waktuSolatService) {
        var $ctrl = this;
        $ctrl.Zones = [];

        $ctrl.$onInit = function () {
            //$log.info("waktuObj popup : ", $ctrl.resolve);
            $ctrl.getZones();
        };

        $ctrl.getZones = function () {

            waktuSolatService.getZone({ 'state': $ctrl.resolve.SearchObj.state,'zone': $ctrl.resolve.SearchObj.zone}).then(function (resp) {

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

