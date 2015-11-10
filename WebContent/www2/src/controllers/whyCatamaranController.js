app.controller("WhyCatamaranController", function($rootScope,StorageConstants) {
	if($rootScope.lang === StorageConstants.lang_eng) {
		$rootScope.changePage("Why a catamaran?", null);
		$rootScope.changeMeta("Why a catamaran?", null,null);
	} else {
		$rootScope.changePage("Miért egy katamarán?", null);
		$rootScope.changeMeta("Miért egy katamarán?", null,null);
	}
	
});