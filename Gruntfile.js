/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      target: {
        files: {
          'ejpg-angular-impl.min.js': [
            'system.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};