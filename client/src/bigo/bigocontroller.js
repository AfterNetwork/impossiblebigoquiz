(function() {

  angular.module('quizApp')
    .controller('BigOController', ['$sce', 'bigofac', 'tools', function($sce, bigofac, tools) {

      var vm = this;
      vm.options = 'constant, linear, quadratic, logarithmic, n log n,  or exponential';
      vm.allTheQuestions;
      vm.question;
      vm.victory = 0;
      vm.counter = 0;
      vm.answer;
      vm.text = '';
      vm.submit = bigofac.submit;
      // grabs data from here
      activate();

      function activate() {
        return getData().then(function() {
          vm.question = $sce.trustAsHtml(vm.allTheQuestions[vm.counter].question);
        });
      }

      function getData() {
        return tools.getData('/questions')
        .then(function(data) {
          vm.allTheQuestions = data;
          return vm.allTheQuestions;
        });
      }
      // - to here
    }]);

})();
