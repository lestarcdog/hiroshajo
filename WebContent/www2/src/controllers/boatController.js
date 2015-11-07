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
		setBackground(null);

	}

	$scope.select = function(boat) {
		$scope.boat = boat;
		// add description toggle
		if (angular.isArray(boat.desc_hu)) {
			$scope.descCollapse = true;
			$scope.txt = boat.desc_hu[0];
			$scope.txtFull = boat.desc_hu.join("");
		} else {
			$scope.txtFull = boat.desc_hu;
		}
		// add background
		setBackground(boat.background);

		var tag = "";
		if (boat.tag_hu != null && boat.tag_hu !== "") {
			tag = " " + boat.tag_hu;
		}
		$rootScope.changePage(boat.name + tag, null);
	}

	$scope.back = function() {
		$rootScope.changePage(defaultPageTitle, null);
		$scope.boat = null;
		$scope.descCollapse = false;
		setBackground(null);
	}

	$scope.toggleDesc = function() {
		$scope.descToggle = !$scope.descToggle;
		if ($scope.descToggle) {
			$scope.descButtonExpandText = "Bezár..."
		} else {
			$scope.descButtonExpandText = "Bővebben..."
		}
	}

	var setBackground = function(path) {
		var bg_path = "url(images/bg/";
		if (path != null && path != "") {
			bg_path += path;
		} else {
			bg_path += "blurred_main_bg.jpg";
		}
		bg_path += ")"
		var bg = angular.element("#hiroshajo-content");
		bg.hide();
		bg.css("background-image", bg_path);
		bg.fadeIn(500);
	}

	$scope.refresh();

});