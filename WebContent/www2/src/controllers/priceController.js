app.controller("PriceController",
		function($scope, $rootScope, ProductCategory) {
			var categories = [];
			$scope.search = {};

			var refresh = function() {
				$rootScope.changePage("Árak", null);
				$rootScope.changeMeta("Árak", null, null);
				categories = [];
				angular.forEach(ProductCategory, function(value, key) {
					categories.push({
						"name" : value.name_hu.substring(0, 20),
						"value" : true
					});
				})
				
				$scope.reset();
			};

			$scope.reset = function() {
				$scope.search = {};
				$scope.search.categories = angular.copy(categories);
			};

			refresh();
		});