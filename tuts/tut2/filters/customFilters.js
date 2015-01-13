angular
	.module('customFilters', [])
	.filter('unique', [function () {
		return function (data, categoryName) {
			if (angular.isArray(data) && angular.isString(categoryName)) {
				return _.chain(data)
						.pluck(categoryName)
						.uniq(true)
						.value();
			} else {
				return data;
			}
		};
	}])
	.filter('range', [function () {
		return function (data, page, size) {

			if (!angular.isArray(data) || !angular.isNumber(page) || !angular.isNumber(size)) {
				return data;
			}

			var startIndex = (page - 1) * size
				, endIndex = startIndex + size;

			return data.slice(startIndex, endIndex);

		}
	}])
	.filter('pageCount', [function () {
		return function (data, size) {
			
			if (!angular.isArray(data) || !angular.isNumber(size)) {
				return data;
			}

			return _.range(1, Math.ceil(data.length / size) + 1);
		}
	}]);