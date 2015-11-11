app.controller("ContactController", function($rootScope) {
	$rootScope.$on("langChanged", function(event, newLang) {
		changePageAndMeta(newLang);
	})

	var changePageAndMeta = function(newLang) {
		if (newLang == StorageConstants.lang_eng) {
			$rootScope.changePage("Concact", null);
			$rootScope.changeMeta("Concact", null, null);
		} else {
			$rootScope.changePage("Elérhetőség", null);
			$rootScope.changeMeta("Elérhetőség", null, null);
		}
	}
});