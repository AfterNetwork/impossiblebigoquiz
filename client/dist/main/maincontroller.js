'use strict';

angular.module('quizApp').controller('MainController', function ($http, $state, $window, authCheck) {
  var _this = this;

  authCheck.auth();
  this.penguin = false;
  this.out = function () {

    $window.localStorage.accessToken = '';
  };

  $http.post('/getmedal', { token: $window.localStorage.accessToken }).then(function (res) {
    console.log(res.data);
    var medals = res.data;
    medals.forEach(function (item) {
      if (item === 'bigopenguin') {
        _this.penguin = true;
      }
    });
  });
});