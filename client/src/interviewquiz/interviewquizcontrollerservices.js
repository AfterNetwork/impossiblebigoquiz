(function() {

  angular.module('quizApp')
    .factory('interfac', ['$state', '$sce', 'tools', function($state, $sce, tools) {

      return {
        submit: submit
      };

      function submit() {
        this.answer = this.text;
        if (this.answer === this.allTheQuestions[this.counter].answer) {
          this.counter ++;
          this.victory ++;
          if (this.victory === 1) {
            tools.savedMedal('/addmedal', 'interviewbear');
            this.counter = 0;
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
            this.victory = 0;
          } else {
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
          }
        } else {
          this.victory = 0;
          this.counter = 0;
          this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
          $state.go('death');
        }
      }

    }]);

})();
