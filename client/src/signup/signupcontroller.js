(function() {

  angular.module('quizApp')
    .controller('SignUpController', ['$http', '$state', function($http, $state) {

      var vm = this;
      vm.user;
      vm.password;
      vm.email;

      vm.submit = function() {
        $http.post('/users', {username: vm.user, password: vm.password, email: vm.email})
          .then(function(res) {
            if (res.data.duplicateUser) {
              alert('username already taken, please choose a new one');
              $state.go('signup');
            }
            if (res.data.duplicateEmail) {
              alert('email already in use, please choose a new one');
              $state.go('signup');
            }
          });

        vm.user = '';
        vm.password = '';
        vm.email = '';
        $state.go('signin');
      };

    }]);

})();
