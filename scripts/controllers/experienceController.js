angular.module('resumeApp')
.controller('expCtrl', ['$scope', 'ExpService', function($scope, ExpService) {
	
	$scope.data = ExpService.data;

}]);