app.service("LocalStorageService", function($window, StorageConstants) {
	var store = $window.localStorage;
	var lang = function(lang) {
		if (lang == null) {
			store.getItem(StorageConstants.langProperty);
		} else {
			store.setItem(StorageConstants.langProperty, lang);
		}
	}
	return {
		lang : lang
	}
})