/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageFooter', ['$log', '$http', 'languageService', '$rootScope', function($log, $http, languageService, $rootScope) {
  return {
    templateUrl: '/assets/partials/pageFooter.html',
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
      var _contextPortuguesLanguage = function() {
        // about
        scope.about = "About";
        scope.team = "Team";
        scope.locations = "Locations";
        scope.privacy = "Privacy";
        scope.terms = "Terms";
      }
      var _contextEnglishLanguage = function() {
        // about
        scope.about = "Sobre";
        scope.team = "Equipe";
        scope.locations = "Localização";
        scope.privacy = "Privacidade";
        scope.terms = "Termos";
      }
      _languageEventListener();
    }
  }
}]);