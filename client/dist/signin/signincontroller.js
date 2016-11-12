'use strict';

angular.module('quizApp').controller('SignInController', function () {
  this.user;
  this.password;
  this.submit = function () {
    console.log(this.user, this.password);
    this.user = '';
    this.password = '';
  };
});