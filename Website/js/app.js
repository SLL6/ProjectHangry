var foodieApp = angular.module('app', []);

app.config(['$routeProvider', function($routes) {

  $routes.when('/',{
    templateUrl : '../index.html',
    controller : MainController
  });

  $routes.otherwise({
    redirectTo : '/'
  });

}]);