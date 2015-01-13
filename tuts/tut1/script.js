var todoApp = angular.module('todoApp', []);

var model = {
	user : 'Jason Cheng'
}

todoApp.run(['$http', function ($http) {
	$http
		.get('todo.json')
		.success(function (data) {
			console.log(data);
			model.items = data;
		});
}]);

todoApp.filter('hideCheckedItems', function () {
	return function (items, showComplete) {
		var shownItems = [];
		angular.forEach(items, function (item) {
			if (!item.done || showComplete) {
				shownItems.push(item);
			}
		});
		return shownItems;
	}
});

todoApp.controller('todoCtrl', ['$scope', function ($scope) {

	$scope.todo = model;

	$scope.incompleteCount = function () {
		var count = 0;
		angular.forEach($scope.todo.items, function (item) {
			if (!item.done) {
				count++;
			}
		});
		return count;
	}

	$scope.warningLevel = function () {
		return $scope.incompleteCount() < 3 ? 'label-success' : 'label-warning';
	}

	$scope.addNewItem = function (item) {
		$scope.todo.items.push({
			description : item,
			done : false
		});
	}

}]);