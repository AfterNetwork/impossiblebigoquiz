'use strict';

//hdefffasdfasdf
angular.module('quizApp').controller('BigOController', function ($http, $state, $sce) {
    var _this = this;

    this.options = "constant, linear, quadratic, logrithmic, or exponential";
    this.allTheQuestions;
    this.question;
    $http.post('/questions').then(function (res) {
        _this.allTheQuestions = res.data;
        _this.question = $sce.trustAsHtml(_this.allTheQuestions[_this.counter].question);
    });
    this.victory = 0;
    this.counter = 0;
    this.answer;
    this.text = '';
    this.submit = function () {
        this.answer = this.text;
        this.text = '';
        if (this.answer === this.allTheQuestions[this.counter].answer) {
            this.counter++;
            this.victory++;
            if (this.victory === 5) {
                $state.go('victory');
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
    };
});