(function() {
  'use strict';
  angular.module('app')
    .controller('MoreInfoController', MoreInfoController);

  MoreInfoController.$inject = [
    'MoreInfoModel'
  ];

  function MoreInfoController(
    MoreInfoModel
  ) {
    var vm = this;
    vm.Model = MoreInfoModel;


  }
})();
