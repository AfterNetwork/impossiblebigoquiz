angular.module('quizApp')
  .controller('ProfileController',["$rootScope", "getUserName", "authCheck", function($rootScope, getUserName, authCheck){
    authCheck.auth();
    getUserName.getUser();

  }]);