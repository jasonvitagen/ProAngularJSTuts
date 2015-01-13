angular
	.module('sportsStore')
	.constant('activeCategoryClass', 'active')
	.constant('activePaginationClass', 'current')
	.constant('productListPageSize', 2)
	.controller('productListCtrl', ['$scope', 'activeCategoryClass', 'activePaginationClass', 'productListPageSize', function ($scope, activeCategoryClass, activePaginationClass, productListPageSize) {

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

	}]);