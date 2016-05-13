(function() {
  'use strict';
  angular.module('app')
    .controller('MoreInfoController', MoreInfoController);

  MoreInfoController.$inject = [
    '$scope', '$ionicPopover',
    'MoreInfoModel'
  ];

  function MoreInfoController(
    $scope, $ionicPopover,
    MoreInfoModel
  ) {
    var vm = this;
    vm.Model = MoreInfoModel;

    vm.updateUser = updateUser;

    $scope.$on('$ionicView.afterEnter', onAfterEnter);
    //====================================================
    //  Public
    //====================================================
    function updateUser() {

    }

    //====================================================
    //  Private
    //====================================================
    function onAfterEnter() {
      generatePopover(['AgePopover', 'EducationPopover', 'LocationPopover', 'OccupationPopover']);
    }

    //====================================================
    //  Util
    //====================================================
    function generatePopover(names) {
      names.forEach((name) => {
        $ionicPopover.fromTemplateUrl(`state/MoreInfo/_${name}.html`, {
            scope: $scope
          })
          .then((popover) => {
            vm[name] = popover;
          });
      });
    }


  }
})();
