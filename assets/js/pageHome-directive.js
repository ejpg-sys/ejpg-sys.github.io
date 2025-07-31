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
        scope.service1Title = 'Microsservices Development';
        scope.service1Summary = 'Development of autonomus services as complaince requirments from your organization';
        scope.service2Title = 'Micro-Frontend Development';
        scope.service2Summary = 'Development of domains micro-frotend for your business goals';
        scope.service3Title = 'IT Consulting';
        scope.service3Summary = 'Support in the exits products and the continuos delivery of your software manufacture';
        // markegin insight
        scope.marketing1Title = 'Best Practices';
        scope.marketing1Text = 'Applied The Industry Standards (DDD, BDD, TDD, Clean Architecture)';
        scope.marketing2Title = 'Simplicity';
        scope.marketing2Text = 'Little pieces of big products (microservices and micro-fronted by domain business requiriments)';
        scope.marketing3Title = 'Continuos Delivery';
        scope.marketing3Text = 'Delivery results in each sprint by the business goals priorities';
        // highlight
        scope.highlight1Title = 'Back-End Java Development';
        scope.highlight1SubTitle = 'Use of Jakarta EE specifications and Spring Framework ecosystem';
        scope.highlight1Text = 'Ready to all chalenges of your organization';
        scope.highlight2Title = 'AngularJS Micro-Frontend Development';
        scope.highlight2SubTitle = 'Best practices in products development for Mobile First';
        scope.highlight2Text = 'In perfect partner with Bootstap, JQuery, and others Frontend technologies';
        scope.highlight3Title = 'Agile Manangement';
        scope.highlight3SubTitle = 'Continuos delivery in compaince with services calendar';
        scope.highlight3Text = 'Your organization always in movement';
      }
      var _contextPortuguesLanguage = function() {
        // carousel
        scope.service1Title = 'Desenvolvimento de Microsserviços';
        scope.service1Summary = 'Desenvolvimento de serviços autonomos de conformidade com requisitos de sua organização';
        scope.service2Title = 'Desenvolvimento de Micro-Frontend';
        scope.service2Summary = 'Desenvolvimento de micro-fronted para atender os objetivos de negocio da sua área comercial';
        scope.service3Title = 'Consultoria em TI';
        scope.service3Summary = 'Sustentação a produtos existentes e entrega continua em sua fábrica de software';
        // markegin insight
        scope.marketing1Title = 'Melhores Práticas';
        scope.marketing1Text = 'Aplicação de Padrões de Industria (DDD, BDD, TDD, Arquitetura Limpa)';
        scope.marketing2Title = 'Simplicidade';
        scope.marketing2Text = 'Pequenas peças de grandes produtos (microsserviços e micro-frontend por requisitos de domínio de negócio)';
        scope.marketing3Title = 'Entrega Contínua';
        scope.marketing3Text = 'Resultados em cada sprint por prioridades de objetivos de negócio';
        // highlight
        scope.highlight1Title = 'Desenvolvimento Back-End Java';
        scope.highlight1SubTitle = 'Uso de especificações Jakarta EE e ecossistema Spring Framework';
        scope.highlight1Text = 'Preparado para todos os desafios da sua organização';
        scope.highlight2Title = 'Desenvolvimento de Micro-Frontend AngularJS';
        scope.highlight2SubTitle = 'Melhores práticas de desenvolvimento de produtos Mobile First';
        scope.highlight2Text = 'Em parceria perfeita com Bootstrap, JQuery, e outras tecnologias Frontend.';
        scope.highlight3Title = 'Gestão Ágil';
        scope.highlight3SubTitle = 'Entrega continua de acordo com calendario de serviços';
        scope.highlight3Text = 'Sua organização sempre em movimento';
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