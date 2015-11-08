app.controller("PriceController", function($scope, $rootScope) {

	$scope.search = {};

	var refresh = function() {
		$rootScope.changePage("Árak", null);
		$rootScope.changeMeta("Árak", null, null);
	}

	$scope.reset = function() {
		$scope.search = {};
	}

	refresh();
});