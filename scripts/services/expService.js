angular.module('resumeApp')
.factory('ExpService', function(){

	return {
		data: {
	    	title: 'Experience',
	    	experienceItems: [
	    		{
	    			employer: 'Qlik',
	    			start: '7/13/15',
	    			end: 'Present',
	    			jobTitle: 'Front End JavaScript Developer',
	    			description: 'Building custom Qlik Sense extensions in JavaScript/CSS/HTML; Building mashups embedding Qlik Sense charts into Web sites'
	    		},
	    		{
	    			employer: 'Grassroots Technologies, Inc.',
	    			start: '1/2009',
	    			end: '5/2015',
	    			jobTitle: 'Developer',
	    			description: 'Maintained and coded standalone and web-based software in Flash using ActionScript, JavaScript, HTML and CSS; implemented unit testing with ASUnit; modified Ant and SQL scripts; trained and code reviewed junior developers.'
	    		}/*,
	    		{
	    			employer: '',
	    			start: '',
	    			end: '',
	    			jobTitle: '',
	    			description: ''
	    		}*/
			]
		}
	}
})