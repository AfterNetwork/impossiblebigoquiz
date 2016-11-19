'use strict';

angular.module('quizApp').controller('ProfileController', function ($rootScope) {
  this.currentUser = $rootScope.username;
});