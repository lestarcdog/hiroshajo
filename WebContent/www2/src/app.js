var app = angular.module("HiroshajoApp", [ "ngRoute" ]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
});

app
		.run(function($rootScope) {
			var meta = {
				title : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. " + (new Date).getFullYear(),
				description : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
				keywords : "hajó, csónak, horgászcsónak, üvegszálas műanyag"

			};
			var page = {
				title : "hajó, csónak, horgászcsónak"
			};
			$rootScope.meta = meta;
			$rootScope.page = page;
		})