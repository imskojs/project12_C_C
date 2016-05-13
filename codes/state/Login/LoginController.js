(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$ionicViewSwitcher', '$state', '$ionicPopup', '$ionicLoading', '$scope',
    '$ionicModal',
    'LoginModel', 'Oauth', 'Users', 'AppStorage',
    'FACEBOOK_KEY', 'DEV_MODE'
  ];

  function LoginController(
    $ionicViewSwitcher, $state, $ionicPopup, $ionicLoading, $scope,
    $ionicModal,
    LoginModel, Oauth, Users, AppStorage,
    FACEBOOK_KEY, DEV_MODE
  ) {
    var vm = this;
    vm.Model = LoginModel;

    vm.login = login;
    vm.goToSignUp = goToSignUp;
    vm.findPassword = findPassword;

    $scope.$on('$ionicView.afterEnter', onAfterEnter);
    $scope.$on('$destroy', onDestroy);
    //====================================================
    //  Public
    //====================================================
    function login(provider) {
      if (provider === 'facebook') {
        return facebookLogin();
      } else if (provider === 'local') {
        return localLogin();
      } else {
        console.log('!provider');
      }
    }

    function findPassword() {
      console.log('find password');
    }

    function goToSignUp() {
      $ionicViewSwitcher.nextDirection('forward');
      return $state.go('Signup');
    }



    //====================================================
    //  Private
    //====================================================
    function facebookLogin() {
      return Oauth.facebook(FACEBOOK_KEY, ['email', 'public_profile'])
        .then(() => {
          $ionicViewSwitcher.nextDirection('forward');
          return $state.go('SurveyList');
        })
        .catch((err) => {
          console.log("err :::\n", err);
          $ionicLoading.hide();
          return $ionicPopup.alert({
            title: 'Facebook 로그인 실패',
            template: '아이디 또는 암호가 틀렸습니다.'
          });
        });
    }

    function localLogin() {
      $ionicLoading.show();
      return Users.login({}, vm.Model.user).$promise
        .then((userWrapper) => {
          console.log("userWrapper :::\n", userWrapper);
          storeUserInfo(userWrapper);
          $ionicLoading.hide();
          $ionicViewSwitcher.nextDirection('forward');
          return $state.go('SurveyList');
        })
        .catch((err) => {
          console.log("err :::\n", err);
          $ionicLoading.hide();
          return $ionicPopup.alert({
            title: '로그인 실패',
            template: '아이디 또는 암호가 틀렸습니다.'
          });
        });
    }

    function storeUserInfo(userWrapper) {
      AppStorage.user = userWrapper.user;
      AppStorage.token = userWrapper.token;
      AppStorage.isFirstTime = false;
    }

    //====================================================
    //  Event Handlers
    //====================================================

    function onAfterEnter() {
      if (!vm.LoginModal) {
        return $ionicModal.fromTemplateUrl('state/Login/_LoginModal.html', {
            scope: $scope,
            animation: 'slide-in-up'
          })
          .then((modal) => {
            vm.LoginModal = modal;
          });
      }
    }

    function onDestroy() {
      if (vm.LoginModal) {
        vm.LoginModal.destroy();
        delete vm.LoginModal;
      }
    }




  }
})();
