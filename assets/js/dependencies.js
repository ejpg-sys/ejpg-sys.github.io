/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var dependenciesReady = false;
var debugEnabled = false;
var developerInfo = function(message) {
  if (debugEnabled) {
    console.log(message);
  }
}
window.addEventListener('DOMContentLoaded', function() {
  developerInfo('The HTML Document was loaded, but scripts can not even completed loaded;');
});
window.addEventListener('load', (event) => {
  if (!dependenciesReady) {
    event.preventDefault();
    developerInfo('is not ready!')
  } else {
    developerInfo('is ready!');
  }
});
var requireDependencies = function() {
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
      'contextService': '/assets/js/context-service'
    }
  });
  require(['system'], function() {
    require(['languageService']);
    require(['contextService']);
    require(['ctrl']);
    require(['pageHeaderDirective']);
    require(['pageContextDirective']);
    require(['pageFooterDirective']);
    require(['pageBlogDirective']);
    require(['pageHomeDirective']);
    dependenciesReady=true;
  });
}
requireDependencies();