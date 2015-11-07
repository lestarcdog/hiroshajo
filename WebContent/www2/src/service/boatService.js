app.factory("BoatService", function($http, httpEndpoints) {
	var getBoats = function() {
		return $http.get(httpEndpoints.boats);
	};

	return {
		getBoats : getBoats
	};
});