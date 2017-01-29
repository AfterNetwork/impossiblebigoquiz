(function() {

  angular.module('quizApp')
    .factory('tools', ['$http', '$window', '$state', function($http, $window, $state) {

      return {
        getData: getData,
        savedMedal: savedMedal
      };

      function getData(route) {
        return $http.post(route, {token: $window.localStorage.accessToken})
          .then(getDataComplete)
          .catch(getDataFailed);
        function getDataComplete(res) {
          return res.data;
        }
        function getDataFailed(err) {
          //hacky way to direct someone back to sign in page if not logged in
          $state.go('signin');
        }
      }

      function savedMedal(route, medalName) {
        $http.post(route, {token: $window.localStorage.accessToken, medal: medalName})
          .then((res) => {});
        $state.go('victory');
      }

    }]);

})();
