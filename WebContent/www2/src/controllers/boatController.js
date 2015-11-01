app.controller("BoatController", function($scope, $rootScope, BoatService) {
	var defaultPageTitle = "Csónakok, katamarán";
	var descLength = 20;
	$scope.descCollapse = false;
	
	$scope.boats = [];
	$scope.boat = null;
	$scope.descCollapse = false;
	
	$rootScope.changePage("Csónakok, katamarán",null);
	$rootScope.changeMeta("Csónakok", null,null)
	
	$scope.refresh = function() {
		BoatService.getBoats().then(function(response) {			
			$scope.boats = response.data;
		});
	}
	
	$scope.select = function(boat) {
		$scope.boat = boat;
		if(boat.desc_hu.length > descLength) {
			$scope.descCollapse = true;
			$scope.txt1 = boat.desc_hu.substring(0,descLength);
			$scope.txt2 = boat.desc_hu.substring(descLength,boat.desc_hu.length);
		} else {
			$scope.txt1 = boat.desc_hu;
		}
		$rootScope.changePage(boat.name,null);
	}
	
	$scope.back = function() {
		$rootScope.changePage(defaultPageTitle,null);
		$scope.boat = null;
		$scope.descCollapse = false;
	}
	
	$scope.refresh();
	
});