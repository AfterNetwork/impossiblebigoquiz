angular.module('quizApp')
  .controller('MainController', function($window){

    this.out = function(){

            $window.localStorage.accessToken = '';
     }


  });