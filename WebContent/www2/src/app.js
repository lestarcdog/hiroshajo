var app = angular.module("HiroshajoApp", [ "ngRoute", "ngSanitize", "ui.bootstrap", "angular-loading-bar", "bootstrapLightbox" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "views/main.html"
	}).when("/used", {
		templateUrl : "views/used.html"
	}).when("/why_catamaran", {
		templateUrl : "views/why_catamaran.html",
		controller : "WhyCatamaranController"
	}).when("/fittings", {
		templateUrl : "views/fittings.html",
		controller : "FittingsController"
	}).when("/contact", {
		templateUrl : "views/contact.html",
		controller : "ContactController"
	}).when("/boats/", {
		templateUrl : "views/boats.html",
		controller : "BoatController"
	})

	.otherwise({
		redirectTo : '/'
	});
});

app.config(function(LightboxProvider) {
	LightboxProvider.templateUrl = "includes/lightbox_hu.html";
});

app.controller("LocationCtrl", function($scope, $location, $rootScope) {

	$scope.isActive = function(route) {
		return $location.path().indexOf(route) !== -1;
	};
});
