'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Configurable paths
    config: {
      css: 'css',
      img: 'img',
      sass: 'sass',
      js: 'js',
      bower: 'js/vendor'
    },

    sass: {
      build: {
        files: {
          '<%= config.css %>/main.css': '<%= config.sass %>/main.scss'
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      css: {
        files: ['<%= config.sass %>/{,*/}*.scss'],
        tasks: ['sass']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    }

  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('build', ['default']);
  grunt.registerTask('dev', ['default', 'watch']);
};
