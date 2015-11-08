app.controller("MainCarouselController", [ "$scope", "BoatService", function($scope, BoatService) {
	$scope.slides = [];

	var refresh = function() {
		BoatService.getBoats().then(function(value) {
			var boats = value.data;
			angular.forEach(boats, function(value, key) {
				if (value.available) {
					$scope.slides.push({
						"id" : key,
						"text" : value.name,
						"image" : value.carousel_img
					});
				}
			});
		});
	}

	refresh();
} ]);