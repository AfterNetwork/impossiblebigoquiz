'use strict';

angular.module('quizApp').controller('SignInController', function ($http, $state, $window) {
  this.user;
  this.password;
  this.token = "";
  this.submit = function () {
    $http.post('/authenticate', { username: this.user, password: this.password }).then(function (res) {
      $window.localStorage.accessToken = res.data.token;
    });

    $http.post('/test', { token: $window.localStorage.accessToken }).then(function (res) {
      console.log(res.data.message);
    });

    this.user = '';
    this.password = '';
    $state.go('home');
  };
});