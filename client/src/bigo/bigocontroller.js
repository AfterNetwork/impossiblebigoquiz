//hdefffasdfasdf
angular.module('quizApp')
  .controller('BigOController', function($http, $state, $sce, $window){
    this.options = "constant, linear, quadratic, logarithmic, n log n,  or exponential";
    this.allTheQuestions;
    this.question;
    $http.post('/questions', {token:$window.localStorage.accessToken})
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
            if(this.victory === 20){
                //put request needs to go here//
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
