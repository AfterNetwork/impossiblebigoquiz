'use strict';

angular.module('quizApp').controller('SignInController', function ($http, $state, $window) {
  this.user;
  this.password;
  this.token = "";
  $http.post('/questions', { token: $window.localStorage.accessToken }).then(function (res) {
    $state.go('home');
  }, function (res) {});
  this.submit = function () {
    $http.post('/authenticate', { username: this.user, password: this.password }).then(function (res) {
      $window.localStorage.accessToken = res.data.token;
      $state.go('home');
    });
    this.user = '';
    this.password = '';
  };
});