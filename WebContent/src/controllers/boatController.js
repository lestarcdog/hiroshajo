app.controller("BoatController", function($scope, $rootScope, $location, Lightbox, BoatService, StorageConstants) {
	var bg = angular.element("#hiroshajo-content");

	$scope.descToggle = false;
	$scope.descCollapse = false;
	var expandText = "";
	var collapseText = "";
	var desc = null;
	$scope.boats = [];
	$scope.boat = null;
	$scope.boatId = null;
	$scope.descCollapse = false;

	var refresh = function() {
		BoatService.getBoats().then(function(response) {
			$scope.boats = response.data;

			var boatId = $location.search().boatId
			if (boatId != null) {
				loadBoatDetails(boatId);
			}
		});
		changePageAndMeta();
		setBackground(null);

	}

	$rootScope.$on("langChanged", function(event, newLang) {
		changePageAndMeta(newLang);
		if ($scope.boat != null) {
			loadBoatDetails($scope.boatId);
		}

	})

	$scope.select = function(boatId) {
		loadBoatDetails(boatId);
	}

	$scope.back = function() {
		changePageAndMeta();
		$scope.boat = null;
		$scope.descCollapse = false;
		$scope.boatId = null;
		setBackground(null);
	}

	$scope.toggleDesc = function() {
		$scope.descToggle = !$scope.descToggle;
		if ($scope.descToggle) {
			$scope.descButtonExpandText = collapseText;
			$scope.txt = "";
		} else {
			$scope.descButtonExpandText = expandText;
			$scope.txt = desc[0];
		}
	}

	$scope.openGallery = function() {
		Lightbox.openModal($scope.boat.gallery, 0);
	}

	$scope.openVideos = function() {
		Lightbox.openModal($scope.boat.videos, 0);
	}

	var loadBoatDetails = function(boatId) {
		var boat = $scope.boats[boatId];
		if (boat == null) {
			return;
		}

		desc;
		if ($rootScope.lang == StorageConstants.lang_eng) {
			desc = boat.desc_en;
		} else {
			desc = boat.desc_hu;
		}

		// add description toggle
		if (angular.isArray(desc)) {
			$scope.descCollapse = true;
			$scope.txt = desc[0];
			$scope.txtFull = "<p>" + desc.join("</p><p>") + "</p>";
		} else {
			$scope.txtFull = desc;
		}

		var tag = "";
		if ($rootScope.lang === StorageConstants.lang_eng) {
			if (boat.tag_en != null && boat.tag_en !== "") {
				tag = " " + boat.tag_en;
			}
		} else {
			if (boat.tag_hu != null && boat.tag_hu !== "") {
				tag = " " + boat.tag_hu;
			}
		}

		$scope.boat = boat;
		$scope.boatId = boatId;
		$rootScope.changePage(boat.name + tag, null);
		$rootScope.changeMeta(boat.name, boat.name + tag, boat.name + tag);

		// add background
		setBackground(boat.background);
	}

	var changePageAndMeta = function() {
		if ($rootScope.lang === StorageConstants.lang_eng) {
			$rootScope.changePage("Boats, catamarans", null);
			$rootScope.changeMeta("Boats", "Híröshajó kecskemét fishing boats", "fishing boats, catamaran");
			$scope.descButtonExpandText = expandText = "More...";
			collapseText = "Close";
		} else {
			$rootScope.changePage("Csónakok, katamarán", null);
			$rootScope.changeMeta("Csónakok", "Híröshajó kecskemét horgász csónakok", "horgász csónak, katamarán");
			$scope.descButtonExpandText = expandText = "Bővebben...";
			collapseText = "Bezár";
		}
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

	refresh();

});