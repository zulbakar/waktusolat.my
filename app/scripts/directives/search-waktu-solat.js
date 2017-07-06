'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:searchWaktuSolat
 * @description
 * # searchWaktuSolat
 */
angular.module('waktusolatmyApp')
  .component('searchWaktuSolat', {
    templateUrl: 'views/search-waktu-solat.html',
    controller: ['$log', 'waktuSolatService',
      function searchWaktuSolat($log, waktuSolatService) {
        var $ctrl = this;

        $ctrl.SearchWaktu = {};
        $ctrl.States = {};
        $ctrl.Zones = {};

        $ctrl.getStates = function () {

          waktuSolatService.getState().then(function (resp) {

            $ctrl.States = resp.data.states;

          }, function (err) {
            $log.log('Error in getState');

          });

        };

        $ctrl.getZones = function () {

          waktuSolatService.getZone({'state': $ctrl.SearchWaktu.state}).then(function (resp) {

$log.log('Error in getZones',resp.data);
            $ctrl.Zones = resp.data.results;

          }, function (err) {
            $log.log('Error in getZones');

          });

        };

        $ctrl.getStates();
        //$ctrl.getZones();

      }]
  });
