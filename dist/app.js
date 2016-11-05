'use strict';

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/quiz');

    $stateProvider.state('quiz', {
        url: '/quiz',
        templateUrl: 'templates/questions/index.html',
        controller: 'MainpageController'
    }).state('victory', {
        url: '/victory',
        templateUrl: 'templates/victory/victory.html'
    }).state('death', {
        url: '/death',
        templateUrl: 'templates/death/death.html'
    });
});

routerApp.controller('MainpageController', function ($http, $state, $sce) {
    var _this = this;

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