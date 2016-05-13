// Description: Extends $rootScope with custom functions;

// Usage;
// In app.js
// .run(['$rootScope', 'RootScope', function ($rootScope, RootScope){
//   angular.extend($rootScope, RootScope);
// }])
(function(angular) {
  'use strict';

  angular.module('app')
    .factory('RootScope', RootScope);

  RootScope.$inject = [
    '$state', '$stateParams', '$ionicHistory', '$ionicSideMenuDelegate', '$timeout',
    '$rootScope', '$ionicViewSwitcher', '$ionicModal', '$ionicScrollDelegate',
    'Message', 'AppStorage', 'Favorite',
    'DEV_MODE'
  ];

  function RootScope(
    $state, $stateParams, $ionicHistory, $ionicSideMenuDelegate, $timeout,
    $rootScope, $ionicViewSwitcher, $ionicModal, $ionicScrollDelegate,
    Message, AppStorage, Favorite,
    DEV_MODE
  ) {
    var service = {
      AppStorage: AppStorage,
      go: go,
      // $state: $state,
      // $stateParams: $stateParams,
      // isState: isState,
      // areStates: areStates,
      // getState: getState,
      // isParam: isParam,
      // hasParam: hasParam,
      // getParam: getParam,
      // goToState: goToState,
      // goBack: goBack,
      // loading: loading,
      // toggleSideMenu: toggleSideMenu,
      // closeSideMenu: closeSideMenu,
      // comingSoon: comingSoon,
      // DEV_MODE: DEV_MODE,

      // likePost: Favorite.likePost,
      // likePlace: Favorite.likePlace
    };

    return service;

    function go(state, direction) {
      if (state === 'back' || state === 'Back') {
        return $ionicHistory.goBack();
      }
      if (!direction) {
        direction = 'forward';
      }
      $ionicViewSwitcher.nextDirection(direction);
      return $state.go(state);
    }

    function isState(state) {
      return state === $ionicHistory.currentStateName();
    }

    function areStates(states) {
      return states.indexOf($ionicHistory.currentStateName()) !== -1;
    }

    function getState() {
      return $ionicHistory.currentStateName();
    }

    //====================================================
    //  $rootScope.toggleSideMenu();
    //====================================================
    function toggleSideMenu() {
      // if (requireLoggedIn) {
      //   if (!AppStorage.token) {
      //     return Message.alert('둘러보기 알림', '로그인을 하셔야 볼수있는 내용입니다.');
      //   }
      // }
      $ionicSideMenuDelegate.toggleLeft();
    }


  } //end
})(angular);
