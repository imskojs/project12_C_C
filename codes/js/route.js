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
        abstract: true,
        url: '/Main',
        templateUrl: 'state/0Main/Main.html',
        controller: 'MainController as vm',
      })
      .state('Walkthrough', {
        url: '/Walkthrough',
        templateUrl: 'state/Walkthrough/Walkthrough.html',
        controller: 'WalkthroughController as vm'
      })
      .state('Login', {
        url: '/Login',
        templateUrl: 'state/Login/Login.html',
        controller: 'LoginController as vm'
      })
      .state('Signup', {
        url: '/Signup',
        templateUrl: 'state/Signup/Signup.html',
        controller: 'SignupController as vm'
      })








  } //route end
})(angular);
