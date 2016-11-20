angular.module('quizApp')
  .controller('ProfileController', function($rootScope, getUserName, authCheck){
    authCheck.auth();
    getUserName.getUser();

  });