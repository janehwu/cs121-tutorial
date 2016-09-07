angular.module('EmailApp', [
  'ngRoute'
]).config(function ( $routeProvider ) {
  // configure urls
  $routeProvider
    .when('/inbox', {
      templateUrl: 'inbox.html',
      controller: 'InboxCtrl',
    })
    .when('/inbox/email/:id', {
      templateUrl: 'email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({ // default route
      redirectTo: '/inbox'
    });
});