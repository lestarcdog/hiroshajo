app
		.run(function($rootScope, $window, $uibModal, LocalStorageService, StorageConstants) {
			var meta = {
				"title" : "Üvegszálas műanyag hajó, csónak, horgászcsónak gyártás. " + (new Date).getFullYear(),
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

			$rootScope.setLang = function(lang) {
				if (lang.indexOf("hu") != -1) {
					LocalStorageService.lang(StorageConstants.lang_hu);
					$rootScope.lang = StorageConstants.lang_hu;
				} else if (lang.indexOf("en") != -1) {
					LocalStorageService.lang(StorageConstants.lang_eng);
					$rootScope.lang = StorageConstants.lang_eng;

					$uibModal.open({
						animation : true,
						controller : 'SalesModalController',
						templateUrl : 'includes/main/salesModal.html'
					});
				} else {
					LocalStorageService.lang(StorageConstants.lang_hu);
					$rootScope.lang = StorageConstants.lang_hu;
				}
				$rootScope.$emit("langChanged", $rootScope.lang);
				// $window.location.reload();
			}

			// add date to header
			angular.element("#header-evszam").attr("src", "images/header/evszam" + (new Date).getFullYear() + ".png");

			// get language default is hu
			var lang = LocalStorageService.lang();
			if (lang == null) {
				LocalStorageService.lang(StorageConstants.lang_hu);
				lang = LocalStorageService.lang();
			}
			$rootScope.lang = lang;
		});
