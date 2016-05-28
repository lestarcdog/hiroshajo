app.controller("FittingsController", function($scope, $rootScope, FittingsService, StorageConstants) {
    $scope.fittings = [];

    var changePageMeta = function() {
        var newLang = $rootScope.lang;
        if (newLang == StorageConstants.lang_eng) {
            $rootScope.changePage("Fittings", null);
            $rootScope.changeMeta("Fittings", null, null);
        } else {
            $rootScope.changePage("Szerelvények", null);
            $rootScope.changeMeta("Szerelvények", null, null);
        }
    };

    $rootScope.$on("langChanged", function(event, newLang) {
        changePageMeta();
    });

    var refresh = function() {
        FittingsService.getFittings().then(function(response) {
            $scope.fittings = response.data;
        });
        changePageMeta($rootScope.lang);
    };

    refresh();
});