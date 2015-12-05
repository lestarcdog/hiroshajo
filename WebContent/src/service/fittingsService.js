app.factory("FittingsService", function($http, httpEndpoints) {
	var getFittings = function() {
		return $http.get(httpEndpoints.fittings);
	};

	return {
		getFittings : getFittings
	};
});