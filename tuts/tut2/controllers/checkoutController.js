angular
	.module('sportsStore')
	.controller('checkoutCtrl', ['$scope', 'cart', function ($scope, cart) {

		$scope.cartData = cart.getProducts();

		$scope.total = function () {
			return _.reduce($scope.cartData, function (oldValue, newValue) {
				return oldValue + newValue.price * newValue.count;
			}, 0);
		}

		$scope.remove = function (id) {
			cart.removeProduct(id);
		}

	}]);