angular.module('resumeApp')
.controller('skillsCtrl', ['$scope', 'SkillsService', function($scope, SkillsService) {
	$scope.data = SkillsService.data;
	$scope.test = 'hello world';
}]);