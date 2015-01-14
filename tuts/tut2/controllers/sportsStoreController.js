angular
	.module('sportsStore')
	.constant('dataUrl', 'products.json')
	.constant('orderUrl', 'http://localhost:3000/angularjs-order-test')
	.controller('sportsStoreCtrl', ['$scope', '$http', 'cart', 'dataUrl', 'orderUrl', '$location', function ($scope, $http, cart, dataUrl, orderUrl, $location) {

		$scope.data = {};

		$http
			.get(dataUrl)
			.success(function (data) {
				$scope.data = data;
			})
			.error(function (error) {
				$scope.data.error = error;
			});

		$scope.sendOrder = function (shippingDetails) {
			$http
				.post(orderUrl, shippingDetails)
				.success(function (data) {
					cart.getProducts().length = 0;
				})
				.error(function (error) {
					$scope.data.orderError = error;
				})
				.finally(function () {
					cart.getProducts().length = 0;
					$location.path('/complete');
				});
		}

	}]);