angular.module('quizApp')
  .controller('ProfileController',["$rootScope", "getUserName", "authCheck", function($rootScope, getUserName, authCheck){
    //make sure user is authorized
    authCheck.auth();
    //sets current user name to the root scope currentUser
    //should be able to delete this as this is done over and over again at run time
    getUserName.getUser();


  }]);