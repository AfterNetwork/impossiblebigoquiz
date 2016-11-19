angular.module('quizApp')
  .controller('MainController', function($http, $state, $window, authCheck, getMedals, $rootScope){
    authCheck.auth();
    this.out = function(){

            $window.localStorage.accessToken = '';
     }
    getMedals.medals();
  });