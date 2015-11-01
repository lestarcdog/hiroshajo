var app = angular.module("HiroshajoApp", [ "ngRoute" ]);
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
		controller: "ContactController"
			
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
				title : "hajó, csónak, horgászcsónak",
				header_pic : "images/bg/blurred_main_bg.jpg"
			};

			$rootScope.lang = "hu";
			$rootScope.meta = meta;
			$rootScope.page = page;

			$rootScope.changeMeta = function(vtitle, vdescription, vkeyword) {
				if (vtitle) {
					$rootScope.meta.title = vtitle;
				}

				if (vdescription) {
					$rootScope.meta.description = vdescription;
				}

				if (vkeyword) {
					$rootScope.meta.keyword = vkeyword;
				}
			};

			$rootScope.changePage = function(vtitle, vheader_pic) {
				if (vheader_pic) {
					vheader_pic = "../images/bg/blurred_main_bg.jpg";
				}
				if (vtitle) {
					page.title = "hajó, csónak, horgászcsónak";
				}
				$rootScope.page = {
					title : vtitle,
					header_pic : vheader_pic
				}
			}
		});

app.controller("LocationCtrl", function($scope, $location, $rootScope) {

	$scope.isActive = function(route) {
		return $location.path().indexOf(route) != -1;
	};
});
