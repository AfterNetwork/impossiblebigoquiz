angular.module('quizApp')
  .controller('MainController', function($http, $state, $window, authCheck){
    authCheck.auth();
    this.penguin = false;
    this.out = function(){

            $window.localStorage.accessToken = '';
     }

     $http.post('/getmedal', {token:$window.localStorage.accessToken})
       .then((res) => {
        console.log(res.data);
          var medals = res.data;
          medals.forEach((item) => {
            if(item === 'bigopenguin'){
              this.penguin = true;
            }
          })
       })
  });