(function() {

  angular.module('quizApp')
    .controller('InterviewquizController', ['$sce', 'tools', 'interfac', function($sce, tools, interfac) {

      var vm = this;
      vm.options = 'type the exact expected output';
      vm.allTheQuestions;
      vm.question;
      vm.victory = 0;
      vm.counter = 0;
      vm.answer = '';
      vm.text = '';
      vm.submit = interfac.submit;

      activate();
      // grabs data from here
      function activate() {
        return getData().then(function() {
          vm.question = $sce.trustAsHtml(vm.allTheQuestions[vm.counter].questions);
        });
      }

      function getData() {
        return tools.getData('/interviewquestions')
          .then(function(data) {
            vm.allTheQuestions = data;
            return vm.allTheQuestions;
          });
      }

    }]);

})();
