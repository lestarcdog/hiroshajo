app.controller("PriceController", function($scope, $rootScope, StorageConstants) {

    $rootScope.$on("langChanged", function(event, newLang) {
        changePageAndMeta();
    });

    var changePageAndMeta = function() {
        var newLang = $rootScope.lang;
        if (newLang == StorageConstants.lang_eng) {
            $rootScope.changePage("Prices", null);
            $rootScope.changeMeta("Prices", null, null);
        } else {
            $rootScope.changePage("Árak", null);
            $rootScope.changeMeta("Árak", null, null);
        }
    };

    changePageAndMeta();
});