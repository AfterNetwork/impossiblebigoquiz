angular.module('quizApp')
  .controller('SignInController', function($http, $state, $window){
    this.user;
    this.password;
    this.token=""
    this.submit = function(){
      $http.post('/authenticate', {username: this.user, password: this.password})
        .then((res) => {
            $window.localStorage.accessToken = res.data.token;
            $state.go('home');
          });
      this.user = '';
      this.password='';

    }

  });