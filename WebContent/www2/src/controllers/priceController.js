app.controller("PriceController", function($scope, $rootScope, ProductCategory,
		PriceService, BoatService) {
	var categories = {};
	$scope.items = items = {};
	$scope.search = {};
	$scope.categoryNames = ProductCategory;

	var refresh = function() {
		$rootScope.changePage("Árak", null);
		$rootScope.changeMeta("Árak", null, null);
		categories = {};
		angular.forEach(ProductCategory, function(value, key) {
			categories[key] = {
				"name" : value.name_hu.substring(0, 20),
				"value" : true
			};
			items[key] = [];
		});
		sortItems();
		$scope.items = items;
		$scope.reset();
	};

	var sortItems = function() {
		// add boats before
		BoatService.getBoats().then(function(response) {
			angular.forEach(response.data, function(boat, key) {
				if (boat.available) {
					items.boats.push({
						"name" : boat.name,
						"price" : boat.price
					});
				}
			})
		});
		PriceService.getPrices().then(function(response) {
			angular.forEach(response.data, function(value, key) {
				items[value.type].push({
					"name" : value.name_hu,
					"price" : value.price
				});
			});
		});
	}

	$scope.reset = function() {
		$scope.search = {};
		$scope.search.categories = angular.copy(categories);
	};

	$scope.disable = function() {
		angular.forEach($scope.search.categories, function(v, key) {
			v.value = false;
		});
	}

	refresh();
});