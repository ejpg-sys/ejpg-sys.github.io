/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var statusIndex = [false, false, false, false, false, false, false, false, false, false];
require.config({
  paths: {
    'system': '/assets/js/system',
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
require(['system'],function(){statusIndex[0]=true;});
require(['languageService'],function(){statusIndex[1]=true;});
require(['contextService'],function(){statusIndex[2]=true;});
require(['pageHeaderDirective'],function(){statusIndex[3]=true;});
require(['pageContextDirective'],function(){statusIndex[4]=true;});
require(['pageFooterDirective'],function(){statusIndex[5]=true;});
require(['pageBlogDirective'],function(){statusIndex[6]=true;});
require(['pageHomeDirective'],function(){statusIndex[7]=true;});
require(['developer'],function(){statusIndex[8]=true;});
require(['ctrl'],function(){statusIndex[9] = true;});
console.log('Not ready! ' + Date.now());
while (true) {}
console.log('Ready! ' + Date.now());