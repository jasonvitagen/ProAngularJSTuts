module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch : {
			dev : {
				files : ['../public/**/*.*', '../tuts/**/*.*'],
				options : {
					livereload : true,
					spawn : false
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch:dev']);

}