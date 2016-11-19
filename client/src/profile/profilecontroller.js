angular.module('quizApp')
  .controller('ProfileController', function($rootScope, getUserName){
    getUserName.getUser();
    console.log($rootScope.currentUser);
  });