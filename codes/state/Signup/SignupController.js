(function() {
  'use strict';
  angular.module('app')
    .controller('SignupController', SignupController);

  SignupController.$inject = [
    '$ionicPopup',
    'SignupModel', 'Users'
  ];

  function SignupController(
    $ionicPopup,
    SignupModel, Users
  ) {
    //====================================================
    //  Constructor
    //====================================================
    var vm = this;
    vm.Model = SignupModel;

    vm.check = check;
    vm.unsetChecked = unsetChecked;
    vm.signup = signup;

    //====================================================
    // Public 
    //====================================================
    function check(userProperty) {
      let queryWrapper = { query: {} };
      if (userProperty === 'nickname') {
        queryWrapper.query.nickname = vm.Model.user.nickname;
      } else if (userProperty === 'email') {
        queryWrapper.query.email = vm.Model.user.email;
      } else {
        console.log('!nickname || !email');
      }
      return Users
        .findOne(queryWrapper).$promise
        .then((user) => {
          console.log("user --vm.check- :::\n", user);
          if (userProperty === 'nickname') {
            vm.Model.checkedNickname = true;
          } else if (userProperty === 'email') {
            vm.Model.checkedEmail = true;
          }
          return alertCheckResult(user, userProperty);
        })
        .catch((err) => {
          console.log("err :::\n", err);
        });
    }

    function unsetChecked(userProperty) {
      if (userProperty === 'nickname') {
        vm.Model.checkedNickname = false;
      } else if (userProperty === 'email') {
        vm.Model.checkedEmail = false;
      }
    }

    function signup() {

      if (!vm.Model.validated()) {
        return false;
      }

      return Users.register(null, vm.Model.user).$promise
        .then(() => {
          $ionicPopup.alert({
            title: '회원가입 알림',
            template: '회원가입이 성공적으로 끝났습니다.'
          });
        })
        .catch((err) => {
          console.log("err :::\n", err);
        });
    }

    //====================================================
    //  Private
    //====================================================
    function alertCheckResult(user, userProperty) {
      if (user && user.id) {
        return $ionicPopup.alert({
          title: '중복확인 알림',
          template: `사용불가능한 ${userProperty === 'nickname'? '닉네임' : '이메일'}입니다`
        });
      } else {
        return $ionicPopup.alert({
          title: '중복확인 알림',
          template: `사용가능한 ${userProperty === 'nickname'? '닉네임' : '이메일'}입니다`
        });
      }
    }

  }
})();
