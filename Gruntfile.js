module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		pluginName: grunt.option('pluginName'),
		banner: grunt.file.read('js/' + grunt.option('pluginName') + '.txt'),
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			my_target: {
				files: {
					'min/<%= pluginName %>.min.js': ['js/<%= pluginName %>.js']
				}
			}
		}
	});

	grunt.registerTask('default', ['uglify']);
};