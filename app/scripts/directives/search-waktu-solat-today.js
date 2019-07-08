'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:searchWaktuSolatToday
 * @description
 * # searchWaktuSolatToday
 */
angular.module('waktusolatmyApp')
  .component('searchWaktuSolatToday', {
    templateUrl: 'views/search-waktu-solat-today.html',
    controller: ['$log', 'waktuSolatService', '$uibModal',
      function searchWaktuSolatToday($log, waktuSolatService, $uibModal) {
        var $ctrl = this;

        var d = new Date();
        $ctrl.SearchWaktu = {};
        $ctrl.filterObj = {};
        $ctrl.States = [];
        $ctrl.Zones = [];
        $ctrl.Today = [];
        $ctrl.isSearch = 0;
        $ctrl.isLoading = true;
        $ctrl.dataLocationObj = [];

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
        $ctrl.nowTime = new Date().getHours() + ':' + new Date().getMinutes();

        $ctrl.SearchWaktu.month = mm;

        $ctrl.getStates = function () {

          waktuSolatService.getState().then(function (resp) {

            $ctrl.States = resp.data.states;
            $ctrl.isLoading = false;

          }, function (err) {
            $log.log('Error in getState');

          });

        };

        $ctrl.getZones = function () {

          $ctrl.isLoading = true;
          if ($ctrl.SearchWaktu.state !== "") {
            waktuSolatService.getZone({ 'state': $ctrl.SearchWaktu.state }).then(function (resp) {

              //$log.log('getZones', resp.data);
              $ctrl.Zones = resp.data.results;
              $ctrl.SearchWaktu.zone = '';
              $ctrl.isLoading = false;

            }, function (err) {
              $log.log('Error in getZones');

            });
          } else {
            $ctrl.Zones = [];
          }

        };

        $ctrl.getToday = function (paramszone) {

          $ctrl.isLoading = true;
          if ($ctrl.SearchWaktu.zone !== "") {
            waktuSolatService.getToday({ 'zone': paramszone }).then(function (resp) {

              // $log.log('today', resp.data.prayer_times);
              $ctrl.Today = resp.data.prayer_times;
              $ctrl.dataLocationObj = resp.data.locations;
              $ctrl.isLoading = false;
              
              openPopupWaktuToday($ctrl.Today);

            }, function (err) {
              $log.log('Error in getMonth');

            });
          } else {
            $ctrl.Today = [];
          }

        };

        var openPopupWaktuToday = function (waktuSolatObj) {

          var modalInstance = $uibModal.open({
            animation: true,
            component: 'resultPopupToday',
            resolve: {
              waktuTodayObj: function () {
                return waktuSolatObj;
              },
              SearchObj: function () {
                return $ctrl.filterObj;
              }
            }
          });

          modalInstance.result.then(function () {
            //$ctrl.selected = selectedItem;
          }, function () {
            $log.info('modal-component dismissed at: ' + new Date());
          });

        };

        $ctrl.applySearchFilter = function () {
          var frmData = angular.copy($ctrl.SearchWaktu);

          if ($ctrl.SearchWaktu.zone) {
            frmData.zone = $ctrl.SearchWaktu.zone;
          }
          //$log.log(frmData.zone);
          $ctrl.getToday(frmData.zone);
          //delete frmData.state;
          delete frmData.year;
          frmData.nowDate = $ctrl.nowDate;
          frmData.nowTime = $ctrl.nowTime;

          // $log.log('data dihantar', frmData);
          $ctrl.filterObj = frmData;
          $ctrl.isSearch = 1;

        };

        $ctrl.resetFilter = function () {
          $ctrl.SearchWaktu = {};
          $ctrl.Zones = [];
          $ctrl.Months = [];
          $ctrl.filterObj = {};
          $ctrl.SearchWaktu.month = mm;
          $ctrl.isSearch = 0;
        };

        $ctrl.getStates();

      }]
  });
