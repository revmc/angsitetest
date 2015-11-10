angular.module('resumeApp')
.controller('eduCtrl', ['$scope', 'EduService', function($scope, EduService) {
	
	$scope.data = EduService.data;

}]);