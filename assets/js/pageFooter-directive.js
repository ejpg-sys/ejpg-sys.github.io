/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageFooter', ['$log', '$http', 'languageService', function($log, $http, languageService) {
  return {
    templateUrl: '/assets/partials/pageFooter.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var eventListener() {
        // TODO: implement!
      }
      var eventChangeLanguage4En = function() {
        // about
        scope.about = "About";
        scope.team = "Team";
        scope.locations = "Locations";
        scope.privacy = "Privacy";
        scope.terms = "Terms";
      }
      var eventChanceLanguage4Pt = function() {
        // about
        scope.about = "Sobre";
        scope.team = "Equipe";
        scope.locations = "Localização";
        scope.privacy = "Privacidade";
        scope.terms = "Termos";
      }
    }
  }
}]);