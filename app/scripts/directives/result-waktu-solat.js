'use strict';

/**
 * @ngdoc directive
 * @name waktusolatmyApp.directive:resultWaktuSolat
 * @description
 * # resultWaktuSolat
 */
angular.module('waktusolatmyApp').component('resultWaktuSolat', {
  templateUrl: 'views/result-waktu-solat.html',
  bindings: {
    searchObj: '<'
  },
  controller: [
    '$log',
    'waktuSolatService',
    '$uibModal',
    function resultWaktuSolat($log, waktuSolatService, $uibModal) {
      var $ctrl = this;

      $ctrl.result = [];
      $ctrl.isLoading = true;

      /*now date */
      var d = new Date();
      var n = d.getFullYear();
      var dd = d.getDate();
      var mm = d.getMonth() + 1; //January is 0!
      var yyyy = d.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      $ctrl.nowDate = dd + '-' + mm + '-' + yyyy;

      $ctrl.$onChanges = function(changesObj) {
        if (changesObj.searchObj) {
          //$log.log('searchObj', $ctrl.searchObj);
          loadWaktuSolat($ctrl.searchObj);
        }
      };

      var loadWaktuSolat = function(paramObj) {
        $ctrl.isLoading = true;
        waktuSolatService.getResult(paramObj).then(
          function(resp) {
            // $log.log('result', resp.data);
            $ctrl.result = resp.data.prayer_times;
            $ctrl.isLoading = false;
          },
          function(err) {
            $log.log('Error in result');
          }
        );
      };

      $ctrl.openPopupWaktu = function(waktuSolatObj) {
        var modalInstance = $uibModal.open({
          animation: true,
          component: 'resultPopup',
          resolve: {
            waktuObj: function() {
              return waktuSolatObj;
            },
            SearchObj: function() {
              return $ctrl.searchObj;
            }
          }
        });

        modalInstance.result.then(
          function(selectedItem) {
            $ctrl.selected = selectedItem;
          },
          function() {
            $log.info('modal-component dismissed at: ' + new Date());
          }
        );
      };

      $ctrl.convertDate = function(param) {
        var newdate = param.split("-").reverse().join("-");
        return newdate;
      };
    }
  ]
});
