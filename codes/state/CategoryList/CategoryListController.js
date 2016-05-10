(function() {
  'use strict';
  angular.module('app')
    .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = [
    'CategoryListModel'
  ];

  function CategoryListController(
    CategoryListModel
  ) {
    var vm = this;
    vm.Model = CategoryListModel;


  }
})();
