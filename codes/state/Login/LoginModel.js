(function() {
  'use strict';

  angular.module('app')
    .factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var Model = {
      user: {
        identifier: '',
        password: ''
      }
    };

    return Model;
  }
})();
