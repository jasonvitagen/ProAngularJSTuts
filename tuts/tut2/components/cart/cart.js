angular
	.module('cart', [])
	.factory('cart', [function () {

		var cart = {}
			, cartData = [];

		cart.addProduct = function (id, name, price) {
			var itemCountIncremented = false;
			for (var i = 0, cartItem; cartItem = cartData[i]; i++) {
				if (cartItem.id == id) {
					cartItem.count++;
					itemCountIncremented = true;
					break;
				}
			}

			if (!itemCountIncremented) {
				cartData.push({
					id    : id,
					name  : name,
					price : price,
					count : 1
				});
			}
		}

		cart.removeProduct = function (id) {
			_.each(cartData, function (cartItem, index) {
				if (cartItem.id == id) {
					cartData.splice(index, 1);
					return;
				}
			});
		}

		cart.getProducts = function () {
			return cartData;
		}

		return cart;

	}])
	.directive('cartSummary', ['cart', function (cart) {

		var cartSummaryDef = {};

		cartSummaryDef.restrict = 'E';
		cartSummaryDef.templateUrl = 'components/cart/cartSummary.html';
		cartSummaryDef.controller = function ($scope) {

			var cartData = cart.getProducts();
			$scope.total = function () {
				return _.reduce(cartData, function (oldValue, newValue) {
					return oldValue + newValue.price * newValue.count;
				}, 0);
			}
			$scope.itemCount = function () {
				return _.reduce(cartData, function (oldValue, newValue) {
					return oldValue + newValue.count;
				}, 0);
			}

		}

		return cartSummaryDef;

	}]);