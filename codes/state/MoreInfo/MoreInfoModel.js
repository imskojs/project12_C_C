(function() {
  'use strict';

  angular.module('app')
    .factory('MoreInfoModel', MoreInfoModel);

  MoreInfoModel.$inject = [];

  function MoreInfoModel() {

    var Model = {
      user: {
        gender: 'male',
        maritalStatus: 'single'
      }

    };

    return Model;
  }
})();
