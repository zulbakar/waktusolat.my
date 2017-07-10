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

        var d = new Date();
        $ctrl.SearchWaktu = {};
        $ctrl.filterObj = {};
        $ctrl.States = [];
        $ctrl.Zones = [];
        $ctrl.Months = [];

        /*GET YEAR*/
        $ctrl.SearchWaktu.year = d.getFullYear();

        /*now date */
        var d = new Date();
        var n = d.getFullYear();
        var dd = d.getDate();
        var mm = d.getMonth() + 1; //January is 0!
        var yyyy = d.getFullYear();

        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }

        $ctrl.nowDate = dd + '-' + mm + '-' + yyyy;

        $ctrl.SearchWaktu.month = mm;

        $ctrl.getStates = function () {

          waktuSolatService.getState().then(function (resp) {

            $ctrl.States = resp.data.states;

          }, function (err) {
            $log.log('Error in getState');

          });

        };

        $ctrl.getZones = function () {

          if ($ctrl.SearchWaktu.state !== "") {
            waktuSolatService.getZone({ 'state': $ctrl.SearchWaktu.state }).then(function (resp) {

              //$log.log('getZones', resp.data);
              $ctrl.Zones = resp.data.results;

            }, function (err) {
              $log.log('Error in getZones');

            });
          } else {
            $ctrl.Zones = [];
          }

        };

        $ctrl.getMonth = function () {

          if ($ctrl.SearchWaktu.zone !== "") {
            waktuSolatService.getMonth().then(function (resp) {

              //$log.log('getMonth', resp.data);
              $ctrl.Months = resp.data;

            }, function (err) {
              $log.log('Error in getMonth');

            });
          } else {
            $ctrl.Months = [];
          }

        };

        $ctrl.applySearchFilter = function () {
          var frmData = angular.copy($ctrl.SearchWaktu);

          if ($ctrl.SearchWaktu.month) {
            frmData.month = $ctrl.SearchWaktu.month;
          }
          if ($ctrl.SearchWaktu.zone) {
            frmData.zone = $ctrl.SearchWaktu.zone;
          }

          //delete frmData.state;
          delete frmData.year;

          //$log.log('data dihantar', frmData);
          $ctrl.filterObj = frmData;

        };

        $ctrl.resetFilter = function () {
          $ctrl.SearchWaktu = {};
          $ctrl.Zones = [];
          $ctrl.Months = [];
          $ctrl.filterObj = {};
          $ctrl.SearchWaktu.month = mm;
        };

        $ctrl.getStates();

      }]
  });
