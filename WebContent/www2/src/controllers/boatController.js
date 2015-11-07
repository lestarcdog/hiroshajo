app.controller("BoatController", function($scope, $rootScope, $location, BoatService) {
	var defaultPageTitle = "Csónakok, katamarán";
	var descLength = 500;

	$scope.descToggle = false;
	$scope.descButtonExpandText = "Bővebben..."
	$scope.descCollapse = false;

	$scope.boats = [];
	$scope.boat = null;
	$scope.descCollapse = false;

	$rootScope.changePage("Csónakok, katamarán", null);
	$rootScope.changeMeta("Csónakok", null, null)

	$scope.refresh = function() {
		BoatService.getBoats().then(function(response) {
			$scope.boats = response.data;
			// console.log($scope.boats);

			var boatId = $location.search().boatId
			if (boatId != null) {
				if ($scope.boats[boatId] != null) {
					$scope.select($scope.boats[boatId]);
				}
			}
		});

	}

	$scope.select = function(boat) {
		$scope.boat = boat;
		// add description toggle
		if (boat.desc_hu.length > descLength) {
			$scope.descCollapse = true;
			$scope.txt = boat.desc_hu.substring(0, descLength);
			$scope.txtFull = boat.desc_hu;
		} else {
			$scope.txtFull = boat.desc_hu;
		}
		// add background
		var bg_path = "url(images/bg/";
		if (boat.background != "") {
			bg_path += boat.background;
		} else {
			bg_path += "blurred_main_bg.jpg";
		}
		bg_path += ")"

		var bg = angular.element("#hiroshajo-content");
		bg.hide();
		bg.css("background-image", bg_path);
		bg.fadeIn(700);

		$rootScope.changePage(boat.name, null);
	}

	$scope.back = function() {
		$rootScope.changePage(defaultPageTitle, null);
		$scope.boat = null;
		$scope.descCollapse = false;
		var bg = angular.element("#hiroshajo-content");
		bg.hide();
		bg.css("background-image", "");
		bg.fadeIn(500);
	}

	$scope.toggleDesc = function() {
		$scope.descToggle = !$scope.descToggle;
		if ($scope.descToggle) {
			$scope.descButtonExpandText = "Bezár..."
		} else {
			$scope.descButtonExpandText = "Bővebben..."
		}
	}

	$scope.refresh();

});