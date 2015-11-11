app.controller("PriceController", function($scope, $rootScope, ProductCategory,
		PriceService, BoatService) {
	var categories = {};
	$scope.items = items = {};
	$scope.search = {};
	$scope.categoryNames = ProductCategory;
	
	$rootScope.$on("langChanged", function(event, newLang) {
		changePageAndMeta(newLang);
	})
	
	var changePageAndMeta = function(newLang) {
		if(newLang == StorageConstants.lang_eng) {
			$rootScope.changePage("Prices", null);
			$rootScope.changeMeta("Prices", null, null);
		} else {
			$rootScope.changePage("Árak", null);
			$rootScope.changeMeta("Árak", null, null);
		}
	}

	var refresh = function() {
		changePageAndMeta($rootScope.lang);
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