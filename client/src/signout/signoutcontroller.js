angular.module('quizApp')
  .controller('SignOutController', function($window){

    this.out = function(){

            $window.localStorage.accessToken = '';
     }


  });