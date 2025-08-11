/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('developer', ['$log', '$rootScope', 'languageService', function($log, $rootScope, languageService) {
  return {
    templateUrl: '/assets/partials/developer.html',
    replace: false,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var _contextEnglishLanguage = function() {
        scope.prodLoadingText = 'Loading...';
      }
      var _contextPortugueseLanguage = function() {
        scope.prodLoadingText = 'Carregando...';
      }
      var _languageEventListener = function() {
        $rootScope.$on('languageEvent', function(event, data) {
          if (languageService.portugueseLanguage === data) {
            _contextPortugueseLanguage();
          } else if (languageService.englishLanguage === data) {
            _contextEnglishLanguage();
          }
        });
      }
      _languageEventListener();
      var _loadingRefIdNotReady = function() {
        document.getElementById('loadingRefId').setAttribute('class', '');
      }
      var _loadingRefIdReady = function() {
        document.getElementById('loadingRefId').setAttribute('class', 'display-none');
      }
      var _initializer = function() {
        setTimeout(() => _loadingRefIdReady(), 5000);
        if (languageService.get() === languageService.portugueseLanguage) {
          _contextPortugueseLanguage();
        } else if (languageService.get() === languageService.englishLanguage) {
          _contextEnglishLanguage();
        }
      }
      _initializer();
    }
  }
}]);