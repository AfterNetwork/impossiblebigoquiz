angular.module('quizApp')
  .service('authCheck', function($http, $state, $window){
    this.auth = function() {
      $http.post('/questions', {token:$window.localStorage.accessToken})
      .then((res) => {
      },(res) => {
        $state.go('signin');
      });
    }
  })
  .service('getMedals', function($http, $window, $rootScope){
      this.medals = function(){
        $http.post('/getmedal', {token:$window.localStorage.accessToken})
         .then((res) => {
           console.log(res.data);
           var medals = res.data;
           medals.forEach((item) => {
             if(item === 'bigopenguin'){
               $rootScope.penguin = true;
             }
             if(item === 'jsfox'){
               $rootScope.fox = true;
             }
          })
       })
       }
  })