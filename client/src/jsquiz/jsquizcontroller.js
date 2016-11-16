angular.module('quizApp')
  .controller('JSQuizController', function($http, $state, $sce, $window){
    this.options = "type the exact expected output";
    this.allTheQuestions;
    this.question;
    $http.post('/jsquestions', {token:$window.localStorage.accessToken})
      .then((res) => {
        this.allTheQuestions = res.data;
        this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
      },(res) => {
        $state.go('signin');
      });
    this.victory = 0;
    this.counter = 0;
    this.answer;
    this.text= '';
    this.submit = function() {
        this.answer = this.text;
        this.text = '';
        if (this.answer === this.allTheQuestions[this.counter].answer){
            this.counter ++;
            this.victory ++;
            if(this.victory === 10){
                $state.go('victory');
                this.counter = 0;
                this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
                this.victory = 0;
            }
            else{
              this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
            }
        }
        else{
            this.victory = 0;
            this.counter = 0;
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].question);
            $state.go('death');
        }
    }

});