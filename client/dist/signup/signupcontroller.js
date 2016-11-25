'use strict';

angular.module('quizApp').controller('SignUpController', function ($http, $state) {
  this.user;
  this.password;
  this.email;
  this.submit = function () {
    $http.post('/users', { username: this.user, password: this.password, email: this.email }).then(function (res) {
      if (res.data.duplicateUser) {
        alert('username already taken, please choose a new one');
        $state.go('signup');
      }
      if (res.data.duplicateEmail) {
        alert('email already in use, please choose a new one');
        $state.go('signup');
      }
    });

    this.user = '';
    this.password = '';
    this.email = '';
    $state.go('signin');
  };
});