app.controller("SalesModalController", function($scope, $uibModalInstance) {
	$scope.close = function() {
		$uibModalInstance.dismiss();
	}
});