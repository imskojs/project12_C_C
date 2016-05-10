(function() {
  'use strict';
  angular.module('app')
    .controller('SurveyListController', SurveyListController);

  SurveyListController.$inject = [
    'SurveyListModel'
  ];

  function SurveyListController(
    SurveyListModel
  ) {
    var vm = this;
    vm.Model = SurveyListModel;


  }
})();
