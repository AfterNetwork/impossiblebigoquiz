angular.module('quizApp')
  .controller('MainController', function($http, $state, $window, authCheck){
    authCheck.auth();
    this.out = function(){

            $window.localStorage.accessToken = '';
     }


  });