/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageFooter', ['$log', '$http', 'languageService', '$rootScope', 'contextService', 'termsService', function($log, $http, languageService, $rootScope, contextService, termsService) {
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
        scope.productSpecIntepreter = 'Specification Interpreter Command';
        scope.productFpaWS = 'FPA WebService';
        scope.productSysWS = 'Systems WebService';
        scope.productBaseWS = 'Base WebService';
        scope.productAdmWS = 'Admin WebService';
        scope.productCgWS = 'Cloud Gateway WebService';
        // services
        scope.services = 'Services';
        scope.serviceITConsulting = 'IT Consulting';
        scope.serviceSoftwareManufacture = 'Software Manufacture';
        // terms reader action button name
        scope.termsReaderBtnCloseName = 'Close';
        scope.termsReaderBtnConfirmName = 'Confirm';
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
        scope.productSpecIntepreter = 'Comando de Interpretação de Especificações';
        scope.productFpaWS = 'FPA Serviço Web';
        scope.productSysWS = 'Systems Serviço Web';
        scope.productBaseWS = 'Base Serviço Web';
        scope.productAdmWS = 'Admin Serviço Web';
        scope.productCgWS = 'Cloud Gateway Serviço Web';
        // services
        scope.services = 'Serviços';
        scope.serviceITConsulting = 'Consultoria em TI';
        scope.serviceSoftwareManufacture = 'Fábrica de Software';
        // terms reader action button name
        scope.termsReaderBtnCloseName = 'Fechar';
        scope.termsReaderBtnConfirmName = 'Confirmar';
      }
      var _initializer = function() {
        if (languageService.get() === languageService.portugueseLanguage) {
          _contextPortuguesLanguage();
		} else if (languageService.get() === languageService.englishLanguage) {
          _contextEnglishLanguage();
        }
	  }
      scope.resourceReaderTerms = {
        subject: undefined,
        bodyText: {
          lines: undefined
        }
      }
      var _readerPrivacyTerms = function() {
        var privacyTermsTextRef = undefined;
        if (languageService.get() === languageService.portugueseLanguage) {
          privacyTermsTextRef = '/privacy-pt.txt';
        } else {
          privacyTermsTextRef = '/privacy.txt';
        }
        $http.get(privacyTermsTextRef)
          .then(function(response) {
            scope.resourceReaderTerms.subject = scope.aboutPrivacy;
            scope.resourceReaderTerms.bodyText.lines = response.data.split('\n');
            $('#readerTermsModalCenteredScrollable').modal('toggle');
          }, function(error) {
            $log.error(error);
          });
      }
      var _readerDataStorageTerms = function() {
        var dataStorageTermsTextRef = undefined;
        if (languageService.get() === languageService.portugueseLanguage) {
          dataStorageTermsTextRef = '/terms-pt.txt';
        } else {
          dataStorageTermsTextRef = '/terms.txt';
        }
        $http.get(dataStorageTermsTextRef)
          .then(function(response) {
            scope.resourceReaderTerms.subject = scope.aboutTerms;
            scope.resourceReaderTerms.bodyText.lines = response.data.split('\n');
            $('#readerTermsModalCenteredScrollable').modal('toggle');
          }, function(error) {
            $log.error(error);
          });
      }
      var _actionResourceReaderTermsShow = function(subject) {
        if (subject === 'privacy') {
          _readerPrivacyTerms();
        } else if (subject === 'terms') {
          _readerDataStorageTerms();
        }
      }
      var _actionResourceReaderTermsHide = function() {
        $('#readerTermsModalCenteredScrollable').modal('hide');
        scope.resourceReaderTerms.subject = '';
        scope.resourceReaderTerms.bodyText.lines = '';
      }
      scope.actionResourceReaderTermsShow = _actionResourceReaderTermsShow;
      scope.actionResourceReaderTermsHide = _actionResourceReaderTermsHide;
      _languageEventListener();
      _initializer();
      var _actionFooterBlogPageReader = function() {
        contextService.set(contextService.pageBlog);
      }
      scope.actionFooterBlogPageReader = _actionFooterBlogPageReader;
      var _initializerTermsConfirm = function() {
        if(termsService.getPrivacyConfirmDate() === null) {
		  _readerPrivacyTerms();
          const scrollableElement = document.getElementById('readerTermsModalCenteredScrollable');
          scrollableElement.addEventListener('scroll', function(event) {
            console.log('Scroll update! ');
          });
        }
      }
      _initializerTermsConfirm();
    }
  }
}]);