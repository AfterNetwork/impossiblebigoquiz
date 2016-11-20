angular.module('quizApp')
  .controller('SignUpController', function($http,$state){
    this.user;
    this.password;
    this.submit = function(){
      $http.post('/users', {username: this.user, password: this.password})
        .then(function(res) {
        if(res.data.duplicate){
          alert('username already taken, please choose a new one');
          $state.go('signup');
        }
      })

      this.user = '';
      this.password='';
      $state.go('signin');
    }
  });