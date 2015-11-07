angular.module('resumeApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	
	$urlRouterProvider.otherwise('/experience');

	$stateProvider.state(
		'experience',
		{
			url: '/experience',
			templateUrl: 'templates/experience.html'
		}
	)
	.state(
		'education',
		{
			url: '/education',
			templateUrl: 'templates/education.html'
		}
	)
	.state(
		'skills',
		{
			url: '/skills',
			templateUrl: 'templates/skills.html'
		}
	);

}]);