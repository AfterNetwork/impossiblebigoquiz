'use strict';

angular.module('quizApp').controller('MainController', function ($http, $state, $window, authCheck) {
  authCheck.auth();
  this.penguin = false;
  this.out = function () {

    $window.localStorage.accessToken = '';
  };
});