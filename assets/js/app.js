
var app = angular.module("altflo", []);

app.controller("textController", ['$scope', function($scope){
	
	$scope.saveValue = function(value){
		localStorage.setItem('textValue', value);
		$scope.text = localStorage.getItem('textValue');
		document.getElementById("resultBox").style.visibility = "visible";
		document.getElementById("editBox").style.visibility = "hidden";
		document.getElementById("closeButton").style.visibility = "hidden";
		//document.getElementById("result").innerHTML = localStorage.textValue + 
		//												"<button ng-click='editText()'><i class='fa fa-pencil'></i></button>";
	};

	$scope.editText = function() {

		document.getElementById("editBox").style.visibility = "visible";
		document.getElementById("closeButton").style.visibility = "visible";
		document.getElementById("resultBox").style.visibility = "hidden";
		//document.getElementById("edit").innerHTML = "<input type='text' ng-model='companyName' class='form-control'><button ng-click='saveValue(companyName)'><i class='fa fa-check'></i></button><button ng-click='revertValue()'><i class='fa fa-close'></i></button>";
	};

	$scope.revertValue = function() {
		$scope.text = localStorage.getItem('textValue');
		document.getElementById("resultBox").style.visibility = "visible";
		document.getElementById("editBox").style.visibility = "hidden";
		document.getElementById("closeButton").style.visibility = "hidden";
		//document.getElementById("result").innerHTML = localStorage.textValue + 
		//												"<button ng-click='editText("+localStorage.textValue+")'><i class='fa fa-pencil'></i></button>";
	};

}]);