app.service("LocalStorageService", function($window, StorageConstants) {
	var store = $window.localStorage;
	var lang = function(lang) {
		if (lang == null) {
			return store.getItem(StorageConstants.langProperty);
		} else {
			return store.setItem(StorageConstants.langProperty, lang);
		}
	};

	var popUpConfig = function(show) {
		if (show == null) {
			var ret = store.getItem(StorageConstants.salePopUp);
			if (ret == null) {
				store.setItem(StorageConstants.salePopUp, true);
			}
			return true;
		} else {
			return store.setItem(StorageConstants.salePopUp, show);
		}
	}
	return {
		lang : lang,
		salePopUp : popUpConfig
	};
});