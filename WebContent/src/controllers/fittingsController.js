app.controller("FittingsController", function($scope, $rootScope, FittingsService, StorageConstants) {
	$scope.fittings = [];
	$scope.sizeSelection = [ 1, 2, 3 ];
	$scope.size = $scope.sizeSelection[1];
	$scope.columnSize = 12 / $scope.size;

	var changePageMeta = function(newVal) {
		if (newVal == StorageConstants.lang_eng) {
			$rootScope.changePage("Fittings", null);
			$rootScope.changeMeta("Fittings", null, null);
		} else {
			$rootScope.changePage("Szerelvények", null);
			$rootScope.changeMeta("Szerelvények", null, null);
		}
	};

	$rootScope.$on("langChanged", function(event, newLang) {
		changePageMeta(newLang);
	});

	var refresh = function() {
		FittingsService.getFittings().then(function(response) {
			$scope.fittings = response.data;
		});
		changePageMeta($rootScope.lang);
	};

	$scope.$watch("size", function(newVal, oldVal, scope) {
		$scope.columnSize = 12 / newVal;
	});

	refresh();
});