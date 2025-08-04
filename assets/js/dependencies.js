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
var dependencies = [
{ name: "Bootstrap Carousel", type: "css", addr: "assets/css/bootstrap-carousel.css" },
{ name: "Bootstrap Breadcrumbs", type: "css", addr: "assets/css/bootstrap-breadcrumbs.css" },
{ name: "AngularJS System Module", type: "js", addr: "assets/js/system.js?v=1234567890" },
{ name: "AngularJS Language Service", type: "js", addr: "assets/js/language-service.js?v=1234567890" },
{ name: "AngularJS Page Header Directive", type: "js", addr: "assets/js/pageHeader-directive.js?v=1234567890" },
{ name: "AngularJS Page Context Directive", type: "js", addr: "assets/js/pageContext-directive.js?v=1234567890" },
{ name: "AngularJS Page Footer Directive", type: "js", addr: "assets/js/pageFooter-directive.js?v=1234567890" },
{ name: "AngularJS Blog Page Directive", type: "js", addr: "assets/js/blog-directive.js?v=1234567890" },
{ name: "AngularJS Home Page Directive", type: "js", addr: "assets/js/pageHome-directive.js?v=1234567890" },
{ name: "AngularJS Context Service", type: "js", addr: "assets/js/context-service.js?v=1234567890" }
];
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
    },
    async: false,
    waitSeconds: 0,
    priority: ['system'],
    callback: function() {
      console.log('ready!');
	},
    deps: ['languageService','contextService','ctrl','pageHeaderDirective',
	'pageContextDirective','pageFooterDirective','pageBlogDirective','pageHomeDirective']
  });
/*  require(['system'], function() {
    require(['languageService']);
    require(['contextService']);
    require(['ctrl']);
    require(['pageHeaderDirective']);
    require(['pageContextDirective']);
    require(['pageFooterDirective']);
    require(['pageBlogDirective']);
    require(['pageHomeDirective']);
    dependenciesReady=true;
  }); */
}
var complete = requireDependencies();