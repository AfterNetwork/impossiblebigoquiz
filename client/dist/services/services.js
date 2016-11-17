'use strict';

angular.module('quizApp').service('authCheck', function ($http, $state, $window) {
  this.auth = function () {
    $http.post('/questions', { token: $window.localStorage.accessToken }).then(function (res) {}, function (res) {
      $state.go('signin');
    });
  };
});