(function(angular) {
  'use strict';
  angular.module('app')
    .config(route);
  route.$inject = ['$stateProvider', '$httpProvider', '$ionicConfigProvider'];

  function route($stateProvider, $httpProvider, $ionicConfigProvider) {

    $ionicConfigProvider.scrolling.jsScrolling(false);
    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider
      .state('Main', {
        url: '/Main',
        templateUrl: 'state/0Main/Main.html',
        controller: 'MainController as Main'
      })








  } //route end
})(angular);
