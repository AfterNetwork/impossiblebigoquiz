angular.module('quizApp')
  .service('authCheck', function($http, $state, $window){
    this.auth = function() {
      $http.post('/questions', {token:$window.localStorage.accessToken})
      .then((res) => {
      },(res) => {
        $state.go('signin');
      });
    }
  });