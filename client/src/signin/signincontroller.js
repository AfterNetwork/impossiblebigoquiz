angular.module('quizApp')
  .controller('SignInController', function($http){
    this.user;
    this.password;
    this.submit = function(){
      console.log(this.user, this.password);
      $http.post('/users', {username: this.user, password: this.password});
      this.user = '';
      this.password='';
    }
  });