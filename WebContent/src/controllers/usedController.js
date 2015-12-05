app.controller("UsedController", function($rootScope,StorageConstants) {
	$rootScope.$on("langChanged", function(event, newLang) {
		changePageAndMeta(newLang);
	})
	
	var changePageAndMeta = function(newLang) {
		if(newLang == StorageConstants.lang_eng) {
			$rootScope.changePage("Used boats", null);
			$rootScope.changeMeta("Used boats", null,null);
		} else {
			$rootScope.changePage("Használt hajók", null);
			$rootScope.changeMeta("Használt hajók", null,null);		
		}
	}
	
});