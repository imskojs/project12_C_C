(function() {
  'use strict';

  angular.module('app')
    .factory('SurveyListModel', SurveyListModel);

  SurveyListModel.$inject = [];

  function SurveyListModel() {

    class Model {
      constructor() {
        this.surveys = [];
        this.dailyIssue = {
          title: '소녀상은 이전되는것이 맞는가!',
          content: `공식적인 사죄도 없이 100억원에 위안부 문제를
          해결하는 것이 누구를 위한 것인지...`
        };
      }
    }

    return new Model();
  }
})();
