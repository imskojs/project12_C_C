(function() {
  'use strict';
  angular.module('app')
    .controller('WalkthroughController', WalkthroughController);

  WalkthroughController.$inject = [
    '$ionicSlideBoxDelegate', '$ionicViewSwitcher', '$state',
    'WalkthroughModel', 'AppStorage'
  ];

  function WalkthroughController(
    $ionicSlideBoxDelegate, $ionicViewSwitcher, $state,
    WalkthroughModel, AppStorage
  ) {
    var vm = this;
    vm.Model = WalkthroughModel;

    vm.next = next;

    //====================================================
    //  VM
    //====================================================
    function next(login) {
      if (login) {
        AppStorage.isFirstTime = false;
        $ionicViewSwitcher.nextDirection('forward');
        return $state.go('Login');
      }
      return $ionicSlideBoxDelegate.next();
    }

  }
})();
