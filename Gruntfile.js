/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      target: {
        options: {
          banner: '/**\n * The MIT License (MIT)\n * Copyright (c) 2024-2025 EJPG-SYS\n */'
        },
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
    },
    cssmin: {
      target: {
        files: {
          'ejpg-bootstrap-impl.min.css': [
            'assets/css/bootstrap-carousel.css',
            'assets/css/bootstrap-breadcrumbs.css',
            'assets/css/system-custom-style.css'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);
};