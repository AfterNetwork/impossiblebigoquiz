'use strict';

angular.module('quizApp', ['ui.router']).run(function ($rootScope, getUserName) {
    $rootScope.bg = true;
    $rootScope.penguin = false;
    $rootScope.fox = false;
    $rootScope.currentUser = "";
    getUserName.getUser();
}).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/signin');

    $stateProvider

    //homepage
    .state('home', {
        url: '/home',
        templateUrl: '../../templates/homepage/index.html',
        css: '../../content/css.css'
    }).state('profile', {
        url: '/profile',
        templateUrl: '../../templates/profile/index.html',
        css: '../../content/css.css'
    }).state('signin', {
        url: '/signin',
        templateUrl: '../../templates/signin/index.html',
        css: '../../content/css.css'
    }).state('signup', {
        url: '/signup',
        templateUrl: '../../templates/signup/index.html',
        css: '../../content/css.css'
    }).state('jsquiz', {
        url: '/jsquiz',
        templateUrl: '../../templates/jsquiz/questions/index.html',
        css: '../../content/css.css'
    })

    //The Big O Quiz
    .state('quiz', {
        url: '/quiz',
        templateUrl: '../../templates/bigo/questions/index.html',
        css: '../../content/css.css'
    }).state('victory', {
        url: '/victory',
        templateUrl: '../../templates/victory/victory.html',
        css: '../../content/css.css'
    }).state('death', {
        url: '/death',
        templateUrl: '../../templates/death/death.html',
        css: '../../content/css.css'
    });
});