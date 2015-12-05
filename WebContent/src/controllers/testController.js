app.controller("TestController", function($rootScope,StorageConstants) {
	$rootScope.$on("langChanged", function(event, newLang) {
		changePageAndMeta(newLang);
	})
	
	var changePageAndMeta = function(newLang) {
		if(newLang == StorageConstants.lang_eng) {
			$rootScope.changePage("Tests", null);
			$rootScope.changeMeta("Tests", null,null);
		} else {
			$rootScope.changePage("Tesztek", null);
			$rootScope.changeMeta("Tesztek", null,null);
		}
	}
});