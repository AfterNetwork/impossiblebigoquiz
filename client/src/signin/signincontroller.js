angular.module('quizApp')
  .controller('SignInController', function($http, $state, $window, $rootScope){
    this.user;
    this.password;
    this.token=""

    $http.post('/questions', {token:$window.localStorage.accessToken})
      .then((res) => {
        $state.go('home');
        $rootScope.bg = false;
      },(res) => {

      });
    this.submit = function(){
      $http.post('/authenticate', {username: this.user, password: this.password})
        .then((res) => {
            console.log(res.data.message);
            $window.localStorage.accessToken = res.data.token;
            $rootScope.bg = false;

            $state.go('home');
          });
      this.user = '';
      this.password='';

    }

  });