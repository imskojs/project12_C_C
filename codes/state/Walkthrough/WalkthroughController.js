(function() {
  'use strict';
  angular.module('app')
    .controller('WalkthroughController', WalkthroughController);

  WalkthroughController.$inject = [
    'WalkthroughModel'
  ];

  function WalkthroughController(
    WalkthroughModel
  ) {
    var vm = this;
    vm.Model = WalkthroughModel;

  }
})();
