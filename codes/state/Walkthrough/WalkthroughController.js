(function() {
  'use strict';
  angular.module('app')
    .controller('WalkthroughController', WalkthroughController);

  WalkthroughController.$inject = [
    '$ionicSlideBoxDelegate', '$ionicViewSwitcher', '$state',
    'WalkthroughModel'
  ];

  function WalkthroughController(
    $ionicSlideBoxDelegate, $ionicViewSwitcher, $state,
    WalkthroughModel
  ) {
    var vm = this;
    vm.Model = WalkthroughModel;

    vm.next = next;

    //====================================================
    //  VM
    //====================================================
    function next(login) {
      if (login) {
        $ionicViewSwitcher.nextDirection('forward');
        return $state.go('Login');
      }
      return $ionicSlideBoxDelegate.next();
    }

  }
})();
