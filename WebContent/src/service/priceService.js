app.factory("PriceService", function($http, httpEndpoints) {
	var getPrices = function() {
		return $http.get(httpEndpoints.prices);
	};

	return {
		getPrices : getPrices
	};
});