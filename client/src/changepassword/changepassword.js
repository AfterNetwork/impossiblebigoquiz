(function() {

  angular.module('quizApp')
    .controller('ChangePasswordController', ['$http', '$state', '$window', function($http, $state, $window) {

      var vm = this;
      vm.newPassword;

      vm.submit = function() {
        $http.post('/changepassword', {password: vm.newPassword, token: $window.localStorage.accessToken})
          .then(function(res) {
            alert('password changed');
          });
        vm.newPassword = '';
        $state.go('profile');
      };

    }]);

})();
