'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:resultWaktuSolat
 * @description
 * # resultWaktuSolat
 */
angular.module('waktusolatmyApp')
  .component('resultWaktuSolat', {
    templateUrl: 'views/result-waktu-solat.html',
    bindings: {
      searchObj: '<'
    },
    controller: ['$log', 'waktuSolatService',
      function resultWaktuSolat($log, waktuSolatService) {
        var $ctrl = this;

        $ctrl.result = [];

        /*now date */
        var d = new Date();
        var n = d.getFullYear();
        var dd = d.getDate();
        var mm = d.getMonth() + 1; //January is 0!
        var yyyy = d.getFullYear();

        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }

        $ctrl.nowDate = dd+'-'+mm+'-'+yyyy;

        $ctrl.$onChanges = function (changesObj) {

          if (changesObj.searchObj) {
            //$log.log('searchObj', $ctrl.searchObj);
            loadWaktuSolat($ctrl.searchObj);
          }

        };

        var loadWaktuSolat = function (paramObj) {
          waktuSolatService.getResult(paramObj).then(function (resp) {

            //$log.log('result', resp.data);
            $ctrl.result = resp.data.prayer_times;

          }, function (err) {
            $log.log('Error in result');

          });

        };

      }]
  });

