angular.module('resumeApp')
.factory('EduService', function(){

	return {
		data: {
	    	title: 'Education',
	    	items: [
	    		{
	    			schoolName: 'Johns Hopkins University',
	    			degreeLevel: 'Bachelor\'s degree',
	    			major: 'Humanities Area Studies',
	    			start: '1989',
	    			end: '1992'
	    		}
			]
		}
	}
})