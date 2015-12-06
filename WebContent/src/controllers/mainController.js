app
		.controller(
				"MainController",
				function($rootScope, StorageConstants) {
					$rootScope.$on("langChanged", function(event, newLang) {
						changePageAndMeta(newLang);
					});

					var changePageAndMeta = function(newLang) {
						var meta = {};
						var page = {};
						if (newLang == StorageConstants.lang_eng) {
							meta = {
								title : "Catamaran fiberglass fishing boats, ships manufacture." + (new Date).getFullYear(),
								description : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
								keywords : "hajó, csónak, horgászcsónak, üvegszálas műanyag"

							};
							page = {
								title : "hajó, csónak, horgászcsónak",
								header_pic : "images/bg/blurred_main_bg.jpg"
							};
						} else {
							meta = {
								title : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. " + (new Date).getFullYear(),
								description : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
								keywords : "hajó, csónak, horgászcsónak, üvegszálas műanyag"

							};
							page = {
								title : "hajó, csónak, horgászcsónak",
								header_pic : "images/bg/blurred_main_bg.jpg"
							};

						}
						$rootScope.changeMeta(meta.title, meta.description, meta.keywords);
						$rootScope.changePage(page.title, page.header_pic);
					};
				});
