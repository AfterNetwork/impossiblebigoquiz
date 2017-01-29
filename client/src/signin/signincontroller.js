(function() {

  angular.module('quizApp')
    .controller('SignInController', ['$http', '$state', '$window', '$rootScope', function($http, $state, $window, $rootScope) {

      var vm = this;
      vm.user;
      vm.password;
      vm.token = '';
      //** why are you pulling from questions? ** By never getting a response back are you wasting precious time?
      $http.post('/questions', {token: $window.localStorage.accessToken})
        .then((res) => {
          $state.go('home');
          $rootScope.bg = false;
        });

      vm.submit = function() {
        $http.post('/authenticate', {username: vm.user, password: vm.password})
          .then((res) => {
            if (res.data.message !== 'You aint in here') {
              $rootScope.bg = false;
              $window.localStorage.accessToken = res.data.token;
              $state.go('home');
            }
          });
        vm.user = '';
        vm.password = '';

      };

    }]);

})();
