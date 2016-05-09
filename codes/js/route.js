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




    //====================================================
    //  ZZZ Samples
    //====================================================
    .state('zLogin', {
      url: '/zLogin',
      templateUrl: 'state/ZZZ/Login/Login.html',
      controller: 'zLoginController as Login'
    })

    .state('Main.zSignup', {
      url: '/zSignup',
      templateUrl: 'state/ZZZ/Signup/Signup.html',
      controller: 'zSignupController as Signup'
    })

    .state('Main.zTerms', {
      url: '/zTerms',
      templateUrl: 'state/ZZZ/Terms/Terms.html',
      controller: 'zTermsController as Terms'
    })


    .state('Main.zPostList', {
      url: '/zPostList',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/PostList/PostList.html',
          controller: 'zPostListController as PostList'
        }
      }
    })

    .state('Main.zPostDetail', {
      url: '/zPostDetail/:id',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/PostDetail/PostDetail.html',
          controller: 'zPostDetailController as PostDetail'
        }
      }
    })

    .state('Main.zPostUpdate', {
      url: '/zPostUpdate/:id',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/PostUpdate/PostUpdate.html',
          controller: 'zPostUpdateController as PostUpdate'
        }
      }
    })

    .state('Main.zPostCreate', {
      url: '/zPostCreate',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/PostCreate/PostCreate.html',
          controller: 'zPostCreateController as PostCreate'
        }
      }
    })

    .state('Main.zCouponList', {
      url: '/zCouponList',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/CouponList/CouponList.html',
          controller: 'zCouponListController as CouponList'
        }
      }
    })

    .state('Main.zCouponDetail', {
      url: '/zCouponDetail',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/CouponDetail/CouponDetail.html',
          controller: 'zCouponDetailController as CouponDetail'
        }
      }
    })

    .state('Main.zProfile', {
      url: '/zProfile',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/Profile/Profile.html',
          controller: 'zProfileController as Profile'
        }
      }
    })

    .state('Main.zPassword', {
      url: '/zPassword',
      views: {
        Main: {
          templateUrl: 'state/ZZZ/Password/Password.html',
          controller: 'zPasswordController as Password'
        }
      }
    })



  } //route end
})(angular);
