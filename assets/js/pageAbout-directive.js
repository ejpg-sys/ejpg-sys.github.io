/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageAbout', ['$log', 'languageService', '$rootScope', 'contextService', function($log, languageService, $rootScope, contextService) {
  return {
    templateUrl: '/assets/partials/pageAbout.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var _contextEnglishLanguage = function() {
        // TODO: implement!
      }
      var _contextPortuguesLanguage = function() {
        // TODO: implement!
      }
	  var _languageEventListener = function() {
        $rootScope.$on('languageEvent', function(event, data) {
          if (languageService.portugueseLanguage === data) {
            _contextPortuguesLanguage();
          } else if (languageService.englishLanguage === data) {
            _contextEnglishLanguage();
          }
        });
      }
      var _initializer = function() {
        if (languageService.get() === languageService.portugueseLanguage) {
          _contextPortuguesLanguage();
        } else if (languageService.get() === languageService.englishLanguage) {
          _contextEnglishLanguage();
        }
      }
      _languageEventListener();
      _initializer();
    }
  }
}]);