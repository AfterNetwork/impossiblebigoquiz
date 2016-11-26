'use strict';

angular.module('quizApp').controller('ForgotPasswordController', function ($http, $state) {
  this.email;
  this.submit = function () {
    $http.post('/forgotpass', { email: this.email }).then(function (res) {
      if (res.data.user === false) {
        alert('email not found');
      }
      if (res.data.messageSent) {
        alert('check your email');
        $state.go('signin');
      }
    });

    this.email = '';
    $state.go('signin');
  };
});