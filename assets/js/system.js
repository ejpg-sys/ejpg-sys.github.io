/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
system.run(function($rootScope, $compile) {
  var indexIdVerify01 = false;
  var indexIdVerify02 = false;
  var indexIdVerify03 = false;
  var indexIdVerify04 = false;
  var indexIdVerify05 = false;
  var indexIdVerify06 = false;
  var indexIdVerify07 = false;
  var indexIdVerify08 = false;
  var indexIdVerify09 = false;
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
    require(['languageService'],function(a){indexIdVerify01=true;});
    require(['contextService'],function(b){indexIdVerify02=true;});
    require(['pageHeaderDirective'],function(c){indexIdVerify03=true;});
    require(['pageContextDirective'],function(d){indexIdVerify04=true;});
    require(['pageFooterDirective'],function(e){indexIdVerify05=true;});
    require(['pageBlogDirective'],function(f){indexIdVerify06=true;});
    require(['pageHomeDirective'],function(g){indexIdVerify07=true;});
    require(['developer'],function(h){indexIdVerify08=true;});
    require(['ctrl'], function(j) {
      indexIdVerify09 = true;
      document.querySelector('body').setAttribute('ng-controller', 'ctrl');
      $rootScope.$apply();
      $rootScope.$digest();
    });
  }
  dependecies();
});