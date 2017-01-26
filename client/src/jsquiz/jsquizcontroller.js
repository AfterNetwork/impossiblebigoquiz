(function() {

  angular.module('quizApp')
    .controller('JSQuizController', ['$http', '$state', '$sce', '$window', 'tools', 'jsfac', function($http, $state, $sce, $window, tools, jsfac) {

      var vm = this;
      vm.options = 'type the exact expected output';
      vm.allTheQuestions;
      vm.question;
      vm.victory = 0;
      vm.counter = 0;
      vm.answer;
      vm.text = '';
      vm.submit = jsfac.submit;
      activate();
      // grabs data from here
      function activate() {
        return getData().then(function() {
          vm.question = $sce.trustAsHtml(vm.allTheQuestions[vm.counter].question);
        });
      }

      function getData() {
        return tools.getData('/jsquestions')
          .then(function(data) {
            vm.allTheQuestions = data;
            return vm.allTheQuestions;
          });
      }

    }]);

})();