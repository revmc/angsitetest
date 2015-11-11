angular.module('resumeApp')
.factory('SkillsService', function() {
	
	return {

		data: {
			title: 'Skills',
			items: ['JavaScript', 'CSS', 'HTML', 'NodeJS']
		}

	};

});