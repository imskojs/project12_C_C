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
    vm.isSelectedCategory = isSelectedCategory;
    vm.toggleCategory = toggleCategory;

    //====================================================
    //  Public
    //====================================================
    function isSelectedCategory(categoryName) {
      if (!vm.Model.selectedCategories) {
        vm.Model.selectedCategories = [];
      }
      return vm.Model.selectedCategories.indexOf(categoryName) !== -1;
    }

    function toggleCategory(categoryName) {
      if (isSelectedCategory(categoryName)) {
        let index = vm.Model.selectedCategories.indexOf(categoryName);
        vm.Model.selectedCategories.splice(index, 1);
      } else {
        vm.Model.selectedCategories.push(categoryName);
      }
    }


  }
})();
