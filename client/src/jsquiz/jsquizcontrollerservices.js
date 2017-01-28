(function() {

  angular.module('quizApp')
    .factory('jsfac', ['$state', '$sce', 'tools', function($state, $sce, tools) {

      return {
        submit: submit
      };

      function submit() {
        this.answer = this.text;
        this.text = '';
        if (this.answer === this.allTheQuestions[this.counter].answer) {
          this.counter ++;
          this.victory ++;
          if (this.victory === 10) {
            tools.savedMedal('/addmedal', 'jsfox');
            this.counter = 0;
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
            this.victory = 0;
          } else {
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
          }
        } else {
          this.victory = 0;
          this.counter = 0;
          this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
          $state.go('death');
        }
      }

    }]);

})();