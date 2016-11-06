angular.module('routerApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/quiz');

    $stateProvider


        .state('quiz', {
            url: '/quiz',
            templateUrl: '../../templates/questions/index.html',
            controller: 'MainpageController'
        })

        .state('victory', {
            url: '/victory',
            templateUrl: '../../templates/victory/victory.html'
        })

        .state('death', {
            url: '/death',
            templateUrl: '../../templates/death/death.html'
        })

});