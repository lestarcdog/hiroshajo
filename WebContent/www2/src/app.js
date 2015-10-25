var app = angular.module("HiroshajoApp", [ "ngRoute" ]);
app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "views/main.html"
	}).when("/used", {
		templateUrl : "views/used.html"
	}).when("/why_catamaran", {
		templateUrl : "views/why_catamaran.html"
	}).when("/contact", {
		templateUrl : "views/contact.html"
	}).otherwise({
		redirectTo : '/'
	});
});

app
		.run(function($rootScope) {
			var meta = {
				title : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. "
						+ (new Date).getFullYear(),
				description : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
				keywords : "hajó, csónak, horgászcsónak, üvegszálas műanyag"

			};
			var page = {
				title : "hajó, csónak, horgászcsónak"
			};
			$rootScope.meta = meta;
			$rootScope.page = page;
		});

app.controller("LocationCtrl",function($scope,$location) {
	$scope.isActive = function(route) {
		return $location.path() == route;
	}
});