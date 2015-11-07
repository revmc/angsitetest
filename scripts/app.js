angular.module('resumeApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state(
		'experience',
		{
			url: '/',
			templateUrl: 'templates/experience.html'
		}
	)
	.state(
		'education',
		{
			url: 'education',
			templateUrl: 'templates/education.html'
		});

}]);