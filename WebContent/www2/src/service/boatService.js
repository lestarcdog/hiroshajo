app.factory("BoatService", function($http) {
	var getBoats = function() {
		return $http.get("db/boats.json");
	};
	
	return {
		getBoats : getBoats
	};
});