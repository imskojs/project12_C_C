// Global variables
(function(angular) {
  'use strict';
  angular.module('app')
    .value('Sample', {
      test: 'test'
    })
    .value('Sample2', [{
      test2: 'test2'
    }]);
})(angular);
