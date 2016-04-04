
var app = angular.module("altflo", []);

app.controller("textController", ['$scope', function($scope){
	$scope.showResultBox = false;
	$scope.showCloseButton = false;
	$scope.showEditBox = true;

	$scope.saveValue = function(value){
		localStorage.setItem('textValue', value);
		$scope.text = localStorage.getItem('textValue');
		$scope.showResultBox = true;
		$scope.showEditBox = false;
		$scope.showCloseButton = false;
	};

	$scope.editText = function() {
		$scope.text = localStorage.getItem('textValue');
		$scope.showResultBox = false;
		$scope.showEditBox = true;
		$scope.showCloseButton = true;
	};

	$scope.revertValue = function() {
		$scope.text = localStorage.getItem('textValue');
		$scope.showResultBox = true;
		$scope.showEditBox = false;
		$scope.showCloseButton = false;
	};

}]);