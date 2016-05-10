(function() {
  'use strict';

  angular.module('app')
    .factory('SurveyListModel', SurveyListModel);

  SurveyListModel.$inject = [];

  function SurveyListModel() {

    class Model {
      constructor() {
        this.surveys = [];
        this.dailyIssue = {};
      }
    }

    return new Model();
  }
})();
