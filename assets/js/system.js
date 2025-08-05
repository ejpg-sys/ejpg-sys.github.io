/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var statusIndex = [false, false, false, false, false, false, false, false, false];
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
  require(['languageService'],function(a){statusIndex[0]=true;});
  require(['contextService'],function(b){statusIndex[1]=true;});
  require(['pageHeaderDirective'],function(c){statusIndex[2]=true;});
  require(['pageContextDirective'],function(d){statusIndex[3]=true;});
  require(['pageFooterDirective'],function(e){statusIndex[4]=true;});
  require(['pageBlogDirective'],function(f){statusIndex[5]=true;});
  require(['pageHomeDirective'],function(g){statusIndex[6]=true;});
  require(['developer'],function(h){statusIndex[7]=true;});
  require(['ctrl'],function(j){statusIndex[8] = true;});
}
dependecies();
var system = angular.module("system", []);