app
		.run(function($rootScope) {
			var meta = {
				"title" : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. "
						+ (new Date).getFullYear(),
				"description" : "A Híröshajó Kft. katamarán aljú, üvegszálas műanyag hajó, csónak, horgászcsónak tervezésével és gyártásával foglalkozik.",
				"keyword" : "hajó, csónak, horgászcsónak, üvegszálas műanyag"
			};
			var page = {
				"title" : "hajó, csónak, horgászcsónak",
				"header_pic" : "images/bg/blurred_main_bg.jpg"
			};
			$rootScope.meta = meta;
			$rootScope.page = page;
			$rootScope.changeMeta = function(vtitle, vdescription, vkeyword) {
				if (vtitle != null) {
					$rootScope.meta.title = vtitle;
				} else {
					$rootScope.meta.title = meta.title;
				}

				if (vdescription != null) {
					$rootScope.meta.description = vdescription;
				} else {
					$rootScope.meta.description = meta.description;
				}

				if (vkeyword != null) {
					$rootScope.meta.keyword = vkeyword;
				} else {
					$rootScope.meta.keyword = meta.keyword;
				}
			};

			$rootScope.changePage = function(vtitle, vheader_pic) {
				if (vheader_pic != null) {
					$rootScope.page.header_pic = vheader_pic;
				} else {
					$rootScope.page.header_pic = page.header_pic;
				}
				if (vtitle != null) {
					$rootScope.page.title = vtitle;
				} else {
					$rootScope.page.title = page.title;
				}
			}

			// add date to header
			angular.element("#header-evszam").attr("src",
					"images/header/evszam" + (new Date).getFullYear() + ".png")
		});
