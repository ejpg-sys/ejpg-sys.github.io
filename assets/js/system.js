/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
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
  require(['languageService']);
  require(['contextService']);
  require(['ctrl']);
  require(['pageHeaderDirective']);
  require(['pageContextDirective']);
  require(['pageFooterDirective']);
  require(['pageBlogDirective']);
  require(['pageHomeDirective']);
  require(['developer']);
  document.querySelector('body').setAttribute('ng-controller', 'ctrl');
}
dependecies();
