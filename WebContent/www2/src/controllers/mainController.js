app.controller("MainController", function($rootScope) {
	// add page header and meta controllers
	var meta = {
			title : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. " + (new Date).getFullYear(),
			description : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
						keywords : "hajó, csónak, horgászcsónak, üvegszálas műanyag"

		};
		var page = {
			title : "hajó, csónak, horgászcsónak",
			header_pic : "images/bg/blurred_main_bg.jpg"
		};
		$rootScope.changeMeta(meta.title, meta.description, meta.keywords);
		$rootScope.changePage(page.title,page.header_pic);
});