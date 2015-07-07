var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope){
  $scope.somedata = "This is some random data!";
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view.html',
      // you can also delete the controller here and add it as ng-controller in the view template.
      controller: 'MainController'
    });
});

 // the above is very simplistic. Improve it by:
app.controller('MainController', function($scope, $routeParams){
  // console.log($routeParams);
  $scope.somedata = $routeParams.myparam;
});

app.config(function($routeProvider) {
  $routeProvider
  // order matters in your routing.
    .when('/', {
      templateUrl: 'view.html',
      // you can also delete the controller here and add it as ng-controller in the view template.
      controller: 'MainController'
    })
    .when('/test/:myparam', {
      templateUrl: 'view2.html',
      controller: 'MainController'
    })
    .when('/test', {
      // redirectTo: '/test/nomatch'
      // this can also be a function:
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams,path,search);
        return '/test/'+search.mynewparam;
      }
    })
    .otherwise({
      template: "Couldn't match a route"
    });
});



