'use strict';

angular.module('quizApp').controller('SignUpController', function ($http, $state) {
  this.user;
  this.password;
  this.submit = function () {
    $http.post('/users', { username: this.user, password: this.password });
    this.user = '';
    this.password = '';
    $state.go('signin');
  };
});