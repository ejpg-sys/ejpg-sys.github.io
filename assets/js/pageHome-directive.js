/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageHome', ['$log', 'languageService', '$rootScope', function($log, languageService, $rootScope) {
  return {
    templateUrl: '/assets/partials/pageHome.html',
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
        // carousel
        scope.service1Title = 'Databases Development';
        scope.service1Summary = 'Databases Development by Custon-Built.';
        scope.service2Title = 'WebServices Development';
        scope.service2Summary = 'WebServices Development by Custon-Built.';
        scope.service3Title = 'Web Front-End Development';
        scope.service3Summary = 'Web Front-End Development by Custon-Built.';
        scope.service4Title = 'IT Consulting';
        scope.service4Summary = 'Business support';
        // markegin insight
        scope.marketing1Title = 'Databases';
        scope.marketing1Text = 'Oracle DB, IBM DB2, SQL Server, PostgreSQL, MariaDB';
        scope.marketing2Title = 'Web Services';
        scope.marketing2Text = 'Jakarta Servlets and RS, Spring Framework, Apache Tomcat, Spring Boot';
        scope.marketing3Title = 'Web Front-End';
        scope.marketing3Text = 'JSP, JSF, jQuery, AngularJS';
        // highlight
        scope.highlight1Title = 'Databases';
        scope.highlight1SubTitle = 'Modeling and Implementation of ILF.';
        scope.highlight1Text = 'Design and Data Solution by Custon-Built.';
        scope.highlight2Title = 'WebServices';
        scope.highlight2SubTitle = 'Integration and Data Processing by ILF, EIF, EQ, EI, and EO.';
        scope.highlight2Text = 'Desing and Solution of WebServices by Custon-Built.';
        scope.highlight3Title = 'Front-End Web';
        scope.highlight3SubTitle = 'Integration and Data Processing by EQ, EI, and EO.';
        scope.highlight3Text = 'Desing and Solution of Front-End Web by Custon-Built.';
      }
      var _contextPortuguesLanguage = function() {
        // carousel
        scope.service1Title = 'Desenvolvimento de Banco de Dados';
        scope.service1Summary = 'Desenvolvimento de Banco de Dados Sob-Encomenda.'
        scope.service2Title = 'Desenvolvimento de Serviços Web';
        scope.service2Summary = 'Desenvolvimento de Serviços Web Sob-Encomenda.';
        scope.service3Title = 'Desenvolvimento de Front-End Web';
        scope.service3Summary = 'Desenvolvimento de Front-End Web Sob-Encomenda.';
        scope.service4Title = 'Consultoria em TI';
        scope.service4Summary = 'Apoio comercial';
        // markegin insight
        scope.marketing1Title = 'Banco de Dados';
        scope.marketing1Text = 'Oracle DB, IBM DB2, SQL Server, PostgreSQL, MariaDB';
        scope.marketing2Title = 'Serviços Web';
        scope.marketing2Text = 'Jakarta Servlets e RS, Spring Framework, Apache Tomcat, Spring Boot';
        scope.marketing3Title = 'Front-End Web';
        scope.marketing3Text = 'JSP, JSF, jQuery, AngularJS';
        // highlight
        scope.highlight1Title = 'Banco de Dados';
        scope.highlight1SubTitle = 'Modelagem e Implementação de ALI.';
        scope.highlight1Text = 'Desenho e Solução de Dados Sob-Encomenda.';
        scope.highlight2Title = 'Serviços Web';
        scope.highlight2SubTitle = 'Integrações e Processamento de Dados por ALI, AIE, CE, EE, e SE.';
        scope.highlight2Text = 'Desenho e Solução de Serviços Web Sob-Encomenda.';
        scope.highlight3Title = 'Front-End Web';
        scope.highlight3SubTitle = 'Integrações e Processamento de Dados por CE, EE, e SE.';
        scope.highlight3Text = 'Desenho e Soluções de Front-End Web Sob-Encomenda.';
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