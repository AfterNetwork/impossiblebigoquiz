'use strict';

angular.module('quizApp').controller('MainController', function ($http, $state, $window, authCheck, getMedals, $rootScope) {
  console.log($rootScope.user);
  authCheck.auth();
  this.out = function () {

    $window.localStorage.accessToken = '';
  };
  getMedals.medals();
});