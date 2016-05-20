var webApp = angular.module('project', ['ngRoute','ng.jsoneditor']).
value('endpoint', 'http://localhost:8080/').
config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/main.html',
      controller: 'mainController'
    })
    .when('/help', {
      templateUrl: 'view/help.html',
    })
    .when('/tree/:instanceId', {
      templateUrl: 'view/tree.html',    
      controller: 'treeController'
    })    
    .otherwise({
      redirectTo:'/'
    });
});

