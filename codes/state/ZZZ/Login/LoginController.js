(function() {
  'use strict';
  angular.module('app')
    .controller('zLoginController', zLoginController);

  zLoginController.$inject = [
    '$scope',
    'zLoginModel', 'Users', 'U', 'Message',
    'FACEBOOK_KEY', 'TWITTER_CONSUMER_KEY', 'TWITTER_CONSUMER_SECRET', 'GOOGLE_OAUTH_CLIENT_ID', 'AppStorage'
  ];

  function zLoginController(
    $scope,
    zLoginModel, Users, U, Message,
    FACEBOOK_KEY, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, GOOGLE_OAUTH_CLIENT_ID, AppStorage
  ) {}
})();
