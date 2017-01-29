(function() {

  angular.module('quizApp', ['ui.router'])
    .run(['$rootScope', 'getUserName', 'authCheck', function($rootScope, getUserName, authCheck) {

      authCheck.auth();
      $rootScope.bg = false;
      $rootScope.penguin = false;
      $rootScope.fox = false;
      $rootScope.bear = false;
      $rootScope.currentUser = '';
      getUserName.getUser();

    }]);

})();
