angular
	.module('sportsStore')
	.constant('dataUrl', 'products.json')
	.controller('sportsStoreCtrl', ['$scope', '$http', 'dataUrl', function ($scope, $http, dataUrl) {

		$scope.data = {};

		$http
			.get(dataUrl)
			.success(function (data) {
				$scope.data = data;
			})
			.error(function (error) {
				$scope.data.error = error;
			});

	}]);