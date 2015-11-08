app.directive("priceTable",function() {
	return {
		restrict: "E",
		scope: {
			title : "@",
			items : "=",
			searchKeyword : "="
		},
		transclude: true,
		templateUrl: "src/directives/template/priceTable.html"
	}
});