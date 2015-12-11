module.exports = function(grunt) {

  grunt.initConfig(
    {
      pkg: grunt.file.readJSON('package.json'),

      concat: {
        dist: {
          src: [
            'scripts/controllers/experienceController.js',
            'scripts/controllers/educationController.js',
            'scripts/controllers/skillsController.js',
            'scripts/services/expService.js',
            'scripts/services/eduService.js',
            'scripts/services/skillsService.js'
          ],
          dest: 'build/scripts/controllers_and_services.js'
        }
      },

      jshint: {
        all: ['scripts/**/*.js']
      }
    }
  );
  
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Default task(s).
  grunt.registerTask('default', ['concat']);
  
};