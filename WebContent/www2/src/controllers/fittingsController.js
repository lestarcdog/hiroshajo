app.controller("FittingsController", function($scope, $rootScope, FittingsService) {
	$scope.fittings = [];
	$scope.sizeSelection = [ 1, 2, 3 ];
	$scope.size = $scope.sizeSelection[1];
	$scope.columnSize = 12 / $scope.size;

	$rootScope.changePage("Szerelvények", null);
	$rootScope.changeMeta("Szerelvények", null, null)

	var refresh = function() {
		FittingsService.getFittings().then(function(response) {
			$scope.fittings = response.data;
		});
	}

	$scope.$watch("size", function(newVal, oldVal, scope) {
		$scope.columnSize = 12 / newVal;
	});

	refresh();
});