var app = angular.module("HiroshajoApp", [ "ngRoute", "ngSanitize",
		"ui.bootstrap", "videosharing-embed", "angular-loading-bar",
		"bootstrapLightbox", "ngAnimate" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "views/main.html",
		controller : "MainController"
	}).when("/used", {
		templateUrl : "views/used.html",
		controller : "UsedController"
	}).when("/why_catamaran", {
		templateUrl : "views/why_catamaran.html",
		controller : "WhyCatamaranController"
	}).when("/fittings", {
		templateUrl : "views/fittings.html",
		controller : "FittingsController"
	}).when("/contact", {
		templateUrl : "views/contact.html",
		controller : "ContactController"
	}).when("/prices", {
		templateUrl : "views/prices.html",
		controller : "PriceController"
	}).when("/boats/", {
		templateUrl : "views/boats.html",
		controller : "BoatController"
	}).when("/tests/boat", {
		templateUrl : "views/tests/boat_test.html",
		controller : "TestController"
	}).when("/tests/electric", {
		templateUrl : "views/tests/electric_test.html",
		controller : "TestController"
	})

	.otherwise({
		redirectTo : '/'
	});
});

app.config(function(LightboxProvider) {
	//check for localStorageservice
	var lang = window.localStorage.getItem("hiroshajo.lang");
	if (lang === "en") {
		LightboxProvider.templateUrl = "includes/lightbox/lightbox_en.html";
	} else {
		LightboxProvider.templateUrl = "includes/lightbox/lightbox_hu.html";
	}
});

app.controller("LocationCtrl", function($scope, $location, $rootScope) {

	$scope.isActive = function(route) {
		return $location.path().indexOf(route) !== -1;
	};
});
