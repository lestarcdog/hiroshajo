app.controller("BoatController", function($scope, $rootScope, BoatService) {
	$scope.boats = [];
	$scope.boat = null;
	
	$rootScope.changePage("Csónakok, katamarán",null);
	$rootScope.changeMeta("Csónakok", null,null)
	
	$scope.refresh = function() {
		BoatService.getBoats().then(function(response) {			
			$scope.boats = response.data;
		});
	}
	
	$scope.select = function(boat) {
		$scope.boat = boat;
	}
	
	$scope.back = function() {
		$scope.boat = null;
	}
	
	$scope.refresh();
	
});