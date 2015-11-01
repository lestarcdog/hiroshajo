app.controller("FittingsController", function($scope, $rootScope, FittingsService) {
	$scope.fittings = [];
	$scope.size = 2;
	$scope.columnSize= 12 / $scope.size;
	
	$rootScope.changePage("Szerelvények",null);
	$rootScope.changeMeta("Szerelvények", null,null)
	
	$scope.refresh = function() {
		FittingsService.getFittings().then(function(response) {
			console.log(response);
			$scope.fittings = response.data;
		});
	}
	
	$scope.refresh();
});