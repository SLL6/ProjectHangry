var foodieApp = angular.module('app', []);

foodieApp.controller("MainController", function(){
    var vm = this;
    vm.title = 'Foodie';
});

foodieApp.controller("search", function($scope) {
	$scope.input = '';
	$scope.get = function(wow) {
		$scope.input = wow;
		alert("WOW " + $scope.input);
	}
});