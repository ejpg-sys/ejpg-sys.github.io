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
    $compile(require(['languageService']))($rootScope);
    $compile(require(['contextService']))($rootScope);
    $compile(require(['ctrl']))($rootScope);
    $compile(require(['pageHeaderDirective']))($rootScope);
    $compile(require(['pageContextDirective']))($rootScope);
    $compile(require(['pageFooterDirective']))($rootScope);
    $compile(require(['pageBlogDirective']))($rootScope);
    $compile(require(['pageHomeDirective']))($rootScope);
    $compile(require(['developer']))($rootScope);
    $rootScope.$apply();
    document.querySelector('body').setAttribute('ng-controller', 'ctrl');
  }
  dependecies();
});