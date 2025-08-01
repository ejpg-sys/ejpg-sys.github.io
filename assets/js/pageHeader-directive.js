/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageHeader', ['$log', 'languageService', '$rootScope', 'contextService', function($log, languageService, $rootScope, contextService) {
  return {
    templateUrl: '/assets/partials/pageHeader.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var _languageEventListener = function() {
        $rootScope.$on('languageEvent', function(event, data) {
          if (languageService.portugueseLanguage === data) {
            _contextPortuguesLanguage();
          } else if (languageService.englishLanguage === data) {
            _contextEnglishLanguage();
          }
        });
      }
      var _contextEnglishLanguage = function() {
        scope.englishLanguageName = 'English';
        scope.portugueseLanguageName = 'Portuguese';
      }
      var _contextPortuguesLanguage = function() {
        scope.portugueseLanguageName = 'Português';
        scope.englishLanguageName = 'Inglês';
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
      scope.actionChangeLanguage = function(language) {
        if (languageService.get() == language) {
          $log.warn('user language already in use: ' + language);
        } else if (languageService.portugueseLanguage === language) {
          languageService.userLanguagePreference('pt');
          _contextPortuguesLanguage();
        } else if (languageService.englishLanguage === language) {
          languageService.userLanguagePreference('en');
          _contextEnglishLanguage();
        } else {
          $log.error('unrecognized value!');
        }
      }
      var _actionHeaderHome = function() {
        contextService.set(contextService.pageHome);
      }
      scope.actionHeaderHome = _actionHeaderHome;
    }
  }
}]);