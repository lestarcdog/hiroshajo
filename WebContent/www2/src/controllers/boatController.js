app.controller("BoatController", function($scope, $rootScope, $location, Lightbox, BoatService) {
	var defaultPageTitle = "Csónakok, katamarán";
	var descLength = 500;
	var bg = angular.element("#hiroshajo-content");

	$scope.descToggle = false;
	$scope.descButtonExpandText = "Bővebben..."
	$scope.descCollapse = false;

	$scope.boats = [];
	$scope.boat = null;
	$scope.descCollapse = false;

	$scope.refresh = function() {
		BoatService.getBoats().then(function(response) {
			$scope.boats = response.data;
			// console.log($scope.boats);

			var boatId = $location.search().boatId
			if (boatId != null) {
				loadBoatDetails(boatId);
			}
		});
		$rootScope.changePage("Csónakok, katamarán", null);
		$rootScope.changeMeta("Csónakok", "Híröshajó kecskemét horgász csónakok", "horgász csónak, katamarán");
		setBackground(null);

	}

	$scope.select = function(boatId) {
		loadBoatDetails(boatId);
	}

	$scope.back = function() {
		$rootScope.changePage("Csónakok, katamarán", null);
		$rootScope.changeMeta("Csónakok", "Híröshajó kecskemét horgász csónakok", "horgász csónak, katamarán");
		$scope.boat = null;
		$scope.descCollapse = false;
		setBackground(null);
	}

	$scope.toggleDesc = function() {
		$scope.descToggle = !$scope.descToggle;
		if ($scope.descToggle) {
			$scope.descButtonExpandText = "Bezár...";
			$scope.txt = "";
		} else {
			$scope.descButtonExpandText = "Bővebben...";
			$scope.txt = $scope.boat.desc_hu[0];
		}
	}

	$scope.openGallery = function() {
		Lightbox.openModal($scope.boat.gallery, 0);
	}

	$scope.openVideos = function() {
		Lightbox.openModal($scope.boat.gallery, 0);
	}

	var loadBoatDetails = function(boatId) {
		var boat = $scope.boats[boatId];
		if (boat == null) {
			return;
		}
		$scope.boat = boat;
		// add description toggle
		if (angular.isArray(boat.desc_hu)) {
			$scope.descCollapse = true;
			$scope.txt = boat.desc_hu[0];
			$scope.txtFull = boat.desc_hu.join("");
		} else {
			$scope.txtFull = boat.desc_hu;
		}

		var tag = "";
		if (boat.tag_hu != null && boat.tag_hu !== "") {
			tag = " " + boat.tag_hu;
		}

		$rootScope.changePage(boat.name + tag, null);
		$rootScope.changeMeta(boat.name, boat.name + tag, boat.name + tag);

		// add background
		setBackground(boat.background);
	}

	var setBackground = function(path) {
		var bg_path = "url(images/bg/";
		if (path != null && path != "") {
			bg_path += path;
			bg.css("background-repeat", "no-repeat");
		} else {
			bg_path += "blurred_main_bg.jpg";
			bg.css("background-repeat", "repeat");
		}
		bg_path += ")"

		bg.hide();
		bg.css("background-image", bg_path);
		bg.fadeIn(500);
	}

	$scope.refresh();

});