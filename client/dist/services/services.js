'use strict';

angular.module('quizApp').service('authCheck', function ($http, $state, $window, $rootScope) {
  this.auth = function () {
    $http.post('/questions', { token: $window.localStorage.accessToken }).then(function (res) {
      $rootScope.bg = false;
    }, function (res) {
      $state.go('signin');
    });
  };
}).service('getMedals', function ($http, $window, $rootScope) {
  this.medals = function () {
    $http.post('/getmedal', { token: $window.localStorage.accessToken }).then(function (res) {
      console.log(res.data);
      var medals = res.data;
      medals.forEach(function (item) {
        if (item === 'bigopenguin') {
          $rootScope.penguin = true;
        }
        if (item === 'jsfox') {
          $rootScope.fox = true;
        }
      });
    });
  };
});