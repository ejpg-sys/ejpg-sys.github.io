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
      var _contextEnglishLanguage = function() {
        // about
        scope.about = 'About';
        scope.aboutTeam = 'Team';
        scope.aboutLocations = 'Locations';
        scope.aboutPrivacy = 'Privacy';
        scope.aboutTerms = 'Terms';
        // blog
        scope.blog = 'Blog';
        scope.blogSD = 'Software Developer'
        // products
        scope.products = 'Products';
        scope.productSpecIntepreter = 'Specification Interpreter';
        scope.productFpaWS = 'FPA WebService';
        scope.productSysWS = 'Systems WebService';
        scope.productBaseWS = 'Base WebService';
        // services
        scope.services = 'Services';
        scope.serviceITConsulting = 'IT Consulting';
        scope.serviceSoftwareManufacture = 'Software Manufacture';
      }
      var _contextPortuguesLanguage = function() {
        // about
        scope.about = "Sobre";
        scope.aboutTeam = "Equipe";
        scope.aboutLocations = "Localização";
        scope.aboutPrivacy = "Privacidade";
        scope.aboutTerms = "Termos";
        // blog
        scope.blog = 'Blog';
        scope.blogSD = 'Desenvolvimento de Software'
        // products
        scope.products = 'Produtos';
        scope.productSpecIntepreter = 'Interpretador de Especificações';
        scope.productFpaWS = 'FPA Serviço Web';
        scope.productSysWS = 'Systems Serviço Web';
        scope.productBaseWS = 'Base Serviço Web';
        // services
        scope.services = 'Serviços';
        scope.serviceITConsulting = 'Consultoria em TI';
        scope.serviceSoftwareManufacture = 'Fábrica de Software';
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