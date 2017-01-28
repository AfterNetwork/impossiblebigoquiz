(function() {

  angular.module('quizApp')
    .factory('bigofac', ['$state', '$sce', 'tools', '$http', '$window', function($state, $sce, tools, $http, $window) {
       //pulls data - from here - saves all data into the variable hardData
      return {
        submit: submit
      };

      function submit() {
        this.answer = this.text;
        this.text = '';
        if (this.answer === this.allTheQuestions[this.counter].answer) {
          this.counter ++;
          this.victory ++;
          if (this.victory === 20) {
            //saves the awarded medal to the users database
            tools.savedMedal('/addmedal', 'bigopenguin');
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