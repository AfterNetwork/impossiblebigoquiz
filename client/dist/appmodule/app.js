'use strict';

//asasdfasdfasdfasdf
angular.module('quizApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    //homepage
    .state('home', {
        url: '/home',
        templateUrl: '../../templates/homepage/index.html'
    }).state('jsquiz', {
        url: '/jsquiz',
        templateUrl: '../../templates/jsquiz/questions/index.html'
    })

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