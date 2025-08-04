/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
system.run(function($rootScope, $compile) {
  var dependecies = function() {
    require.config({
      paths: {
        'ctrl': '/assets/js/ctrl',
        'languageService': '/assets/js/language-service',
        'pageHeaderDirective': '/assets/js/pageHeader-directive',
        'pageContextDirective': '/assets/js/pageContext-directive',
        'pageFooterDirective': '/assets/js/pageFooter-directive',
        'pageBlogDirective': '/assets/js/blog-directive',
        'pageHomeDirective': '/assets/js/pageHome-directive',
        'contextService': '/assets/js/context-service',
        'developer': '/assets/js/developer-directive'
      }
    });
    require(['languageService'], function(languageService) {
      $compile(languageService)($rootScope);
    });
    require(['contextService'], function(contextService) {
      $compile(contextService)($rootScope);
    });
    require(['pageHeaderDirective'], function(pageHeader) {
      $compile(pageHeader)($rootScope);
    });
    require(['pageContextDirective'], function(pageContext) {
      $compile(pageContext)($rootScope);
    });
    require(['pageFooterDirective'], function(pageFooter) {
      $compile(pageFooter)($rootScope);
    });
    require(['pageBlogDirective'], function(pageBlog) {
      $compile(pageBlog)($rootScope);
    });
    require(['pageHomeDirective'], function(pageHome) {
      $compile(pageHome)($rootScope);
    });
    require(['developer'], function(developer) {
      $compile(developer)($rootScope);
    });
    require(['ctrl'], function(ctrl) {
      $compile(ctrl)($rootScope);
      document.querySelector('body').setAttribute('ng-controller', 'ctrl');
    });
    $rootScope.$apply();
    $rootScope.$digest();
  }
  dependecies();
});