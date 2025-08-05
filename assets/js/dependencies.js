/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
require.config({
  waitSeconds: 60,
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
  },
  deps: ['system',
  'languageService',
  'contextService',
  'pageHeaderDirective',
  'pageContextDirective',
  'pageFooterDirective',
  'pageBlogDirective',
  'pageHomeDirective',
  'developer',
  'ctrl']
});