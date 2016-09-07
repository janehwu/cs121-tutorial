angular.module('EmailApp', [
  'ngRoute'
]).config(function ( $routeProvider ) {
  'use strict';
  // configure urls
  $routeProvider
    // inbox route
    .when('/inbox', {
      templateUrl: 'inbox.html',
      controller: 'InboxCtrl', // map js to html scope
    })
    .when('/inbox/email/:id', {
      templateUrl: 'email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({ // default
      redirectTo: '/inbox'
    });
});