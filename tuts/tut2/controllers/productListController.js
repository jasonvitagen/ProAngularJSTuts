angular
	.module('sportsStore')
	.constant('activeCategoryClass', 'active')
	.constant('activePaginationClass', 'active')
	.constant('productListPageSize', 2)
	.controller('productListCtrl', ['$scope', 'activeCategoryClass', 'activePaginationClass', 'productListPageSize', 'cart', function ($scope, activeCategoryClass, activePaginationClass, productListPageSize, cart) {

		var selectedCategory = null;

		$scope.selectCategory = function (category) {
			selectedCategory = category;
			$scope.selectedPage = 1;
		}

		$scope.getCategoryClass = function (category) {
			return selectedCategory == category ? activeCategoryClass : '';
		}

		$scope.categoryFilterFn = function (product) {
			return !selectedCategory || product.category == selectedCategory;
		}

		$scope.selectedPage = 1;

		$scope.pageSize = productListPageSize;

		$scope.selectPage = function (page) {
			$scope.selectedPage = page;
		}

		$scope.getPaginationClass = function (page) {
			return $scope.selectedPage == page ? activePaginationClass : '';
		}

		$scope.addProductToCart = function (product) {
			cart.addProduct(product.id, product.name, product.price);
		}

	}]);