'use strict';

//asasdfasdfasdfasdf
angular.module('quizApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/quiz');

    $stateProvider

    //The Big O Quiz
    .state('quiz', {
        url: '/quiz',
        templateUrl: '../../templates/bigo/questions/index.html'
    }).state('victory', {
        url: '/victory',
        templateUrl: '../../templates/victory/victory.html'
    }).state('death', {
        url: '/death',
        templateUrl: '../../templates/death/death.html'
    });
});