angular.module('quizApp')
  .controller('InterviewquizController', ["$http", "$state", "$sce", "$window", function($http, $state, $sce, $window){
    this.options = "type the exact expected output";
    this.allTheQuestions;
    this.question;
    $http.post('/interviewquestions', {token:$window.localStorage.accessToken})
      .then((res) => {
        this.allTheQuestions = res.data;
        this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
      })
      .catch((err) => {
        $state.go('signin');
      });
    this.victory = 0;
    this.counter = 0;
    this.answer='';
    this.text="";
    this.submit = function() {
        this.answer = this.text;
        console.log(this.answer);
        if (this.answer === this.allTheQuestions[this.counter].answer){
            this.counter ++;
            this.victory ++;
            if(this.victory === 20){
                $http.post('/addmedal', {token:$window.localStorage.accessToken, medal:'interviewbear'})
                      .then((res) => {

                      });
                $state.go('victory');
                this.counter = 0;
                this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
                this.victory = 0;
            }
            else{
              this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
            }
        }
        else{
            this.victory = 0;
            this.counter = 0;
            this.question = $sce.trustAsHtml(this.allTheQuestions[this.counter].questions);
            $state.go('death');
        }
    }

}]);