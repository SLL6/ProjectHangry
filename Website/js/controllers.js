
foodieApp.controller("MainController", function($scope){
    var vm = this;
    $scope.title = 'Foodie';
});


foodieApp.controller("search", function($scope) {
	$scope.input = '';
	$scope.get = function(wow) {
		$scope.input = wow;
		alert("WOW " + $scope.input);
	}
});