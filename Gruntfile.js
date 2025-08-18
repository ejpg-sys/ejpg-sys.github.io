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
            'assets/js/system.js',
            'assets/js/language-service.js',
            'assets/js/pageHeader-directive.js',
            'assets/js/pageFooter-directive.js',
            'assets/js/blog-directive.js',
            'assets/js/pageHome-directive.js',
            'assets/js/context-service.js',
            'assets/js/pageContext-directive.js',
            'assets/js/termsService.js',
            'assets/js/developer-directive.js',
            'assets/js/ctrl.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};