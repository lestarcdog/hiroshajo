app.factory("FittingsService", function($http) {
	var getFittings = function() {
		return $http.get("db/fittings.json");
	};
	
	return {
		getFittings : getFittings
	};
});