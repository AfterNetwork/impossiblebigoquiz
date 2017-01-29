(function() {

  angular.module('quizApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/signin');

      $stateProvider

      //homepage
      .state('home', {
        url: '/home',
        templateUrl: '../../templates/homepage/index.html',
        controller: 'MainController as main'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: '../../templates/profile/index.html',
        controller: 'ProfileController as profile'
      })

      .state('signin', {
        url: '/signin',
        templateUrl: '../../templates/signin/index.html',
        controller: 'SignInController as sign'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: '../../templates/signup/index.html',
        controller: 'SignUpController as signup'
      })

      .state('forgotpassword', {
        url: '/forgotpassword',
        templateUrl: '../../templates/forgotpassword/index.html',
        controller: 'ForgotPasswordController as forgot'
      })

      .state('changepassword', {
        url: '/changepassword',
        templateUrl: '../../templates/changepassword/index.html',
        controller: 'ChangePasswordController as change'
      })

      .state('jsquiz', {
        url: '/jsquiz',
        templateUrl: '../../templates/jsquiz/questions/index.html',
        controller: 'JSQuizController as jsquiz'
      })

      .state('interviewquestionsquiz', {
        url: '/interviewquestions',
        templateUrl: '../../templates/interviewquestions/questions/index.html',
        controller: 'InterviewquizController as interview'
      })
      //The Big O Quiz
      .state('quiz', {
        url: '/quiz',
        templateUrl: '../../templates/bigo/questions/index.html',
        controller: 'BigOController as bigo'
      })

      .state('victory', {
        url: '/victory',
        templateUrl: '../../templates/victory/victory.html',
        controller: 'MainController as main'
      })

      .state('death', {
        url: '/death',
        templateUrl: '../../templates/death/death.html',
        controller: 'MainController as main'
      });

    }]);

})();
