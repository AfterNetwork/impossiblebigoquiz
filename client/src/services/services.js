angular.module('quizApp')
  .service('authCheck', ["$http", "$state", "$window", "$rootScope", function($http, $state, $window, $rootScope){
    this.auth = function() {
      $http.post('/banana', {token:$window.localStorage.accessToken})
      .then((res) => {
      })
      .catch((err) => {
        $rootScope.bg = true;
        $state.go('signin');
      });
    }
  }])
  .service('getMedals', ["$http", "$window", "$rootScope",function($http, $window, $rootScope){
      this.medals = function(){
        $http.post('/getmedal', {token:$window.localStorage.accessToken})
         .then((res) => {
           console.log(res.data);
           var medals = res.data;
           //checks to see medals have been earned, if have, set rootScope to true.
           medals.forEach((item) => {
             if(item === 'bigopenguin'){
               $rootScope.penguin = true;
             }
             if(item === 'jsfox'){
               $rootScope.fox = true;
             }
             if(item === 'interviewbear'){
               $rootScope.bear = true;
             }
          })
       })
       }
      }])

    .service('getUserName', ["$http",  "$window", "$rootScope", function($http, $window, $rootScope){
      this.getUser = function(){
        $http.post('/getusername', {token:$window.localStorage.accessToken})
         .then((res) => {
           $rootScope.currentUser = res.data;
          })
       }
    }])


