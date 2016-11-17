angular.module('quizApp')
  .controller('MainController', function($http, $state, $window){
    $http.post('/questions', {token:$window.localStorage.accessToken})
      .then((res) => {
        console.log('you are cool');
      },(res) => {
        $state.go('signin');
      });
    this.out = function(){

            $window.localStorage.accessToken = '';
     }


  });