app.directive("priceTable",function($rootScope) {
	return {
		restrict: "E",
		scope: {
			title : "@",
			items : "=",
			searchKeyword : "="
		},
		templateUrl: "src/directives/template/priceTable_"+$rootScope.lang+".html"
	}
});