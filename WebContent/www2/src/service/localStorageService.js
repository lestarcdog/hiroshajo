app.service("LocalStorageService", function($window, StorageConstants) {
	var store = $window.localStorage;
	var lang = function(lang) {
		if (lang == null) {
			return store.getItem(StorageConstants.langProperty);
		} else {
			return store.setItem(StorageConstants.langProperty, lang);
		}
	}
	return {
		lang : lang
	}
})