app.controller("PriceController", function($scope, $rootScope) {

	var refresh = function() {
		$rootScope.changePage("Árak", null);
		$rootScope.changeMeta("Árak", null, null);
	}

	refresh();
});