angular.module('quizApp')
  .controller('ChangePasswordController', ["$http", "$state", "$window", function($http,$state,$window){

    this.newPassword;

    this.submit = function(){
      $http.post('/changepassword', {password: this.newPassword, token:$window.localStorage.accessToken})
        .then(function(res) {
        alert('password changed');
      })


      this.newPassword='';

      $state.go('profile');
    }
  }]);