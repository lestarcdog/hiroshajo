app.controller("ContactController", function($rootScope, StorageConstants) {
    $rootScope.$on("langChanged", function(event, newLang) {
        changePageAndMeta();
    });

    var changePageAndMeta = function() {
        var lang = $rootScope.lang;
        if (lang == StorageConstants.lang_eng) {
            $rootScope.changePage("Concact", null);
            $rootScope.changeMeta("Concact", null, null);
        } else {
            $rootScope.changePage("Elérhetőség", null);
            $rootScope.changeMeta("Elérhetőség", null, null);
        }
    };

    changePageAndMeta();
});