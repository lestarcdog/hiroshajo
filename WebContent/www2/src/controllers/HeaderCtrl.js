app
		.controller(
				"HeaderCtrl",
				function($scope) {
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
					$scope.meta = meta;
					$scope.page = page;

					this.changeMeta = function(vtitle, vdescription, vkeyword) {
						$scope.meta = {
							title : vtitle,
							description : vdescription,
							keywords : vkeyword
						}
					}

					this.changePage = function(vtitle, vheader_pic) {
						if(vheader_pic) {
							vheader_pic="../images/bg/blurred_main_bg.jpg";
						}
						$scope.page = {
							title : "hajó, csónak, horgászcsónak",
							header_pic : vheader_pic
						}
					}
				});