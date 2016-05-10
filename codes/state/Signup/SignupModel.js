(function() {
  'use strict';

  angular.module('app')
    .factory('SignupModel', SignupModel);

  SignupModel.$inject = [
    '$ionicPopup'
  ];

  function SignupModel(
    $ionicPopup
  ) {

    class Model {

      constructor() {
        this.user = {
          nickname: '',
          email: '',
          password: ''
        };
        this.confirmPassword = '';
        this.checkedNickname = false;
        this.checkedEmail = false;
      }

      validated() {
        if (this.user.password !== this.confirmPassword) {
          $ionicPopup.alert({
            title: '비밀번호 불일치 알림',
            template: '비밀번호가 서로 다릅니다. 다시입력해주세요.'
          });
          return false;
        } else if (!this.checkedNickname) {
          $ionicPopup.alert({
            title: '닉네임 중복확인 알림',
            template: '닉네임 중복확인을 해주시기 바랍니다.'
          });
          return false;
        } else if (!this.checkedEmail) {
          $ionicPopup.alert({
            title: '이메일 중복확인 알림',
            template: '이메일 중복확인을 해주시기 바랍니다.'
          });
          return false;
        }

        return true;
      }
    }

    return new Model();
  }
})();
