/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
system.controller("ctrl", function ($scope,$http,$log) {
  $scope.pageTitle = "EJPG-SYS on GITHUB.IO";
  $scope.portugueseLanguage = 'pt';
  $scope.englishLanguage = 'en';
  $scope.userLanguageStarter = function() {
    var userLanguage = undefined;
    var userLanguages = navigator.languages;
    var i = 0;
    while(i < userLanguages.length) {
      if (userLanguages[i] === 'pt' || userLanguages[i] === 'pt-BR') {
        userLanguage = $scope.portugueseLanguage;
        $scope.language = userLanguage;
        localStorage.setItem('language', $scope.language);
        break;
      }
      i+=1;
    }
    if (userLanguage === undefined) {
      $scope.language = $scope.englishLanguage;
      localStorage.setItem('language', $scope.language);
    }
  }
  $scope.userLanguagePreferenceUpdate = function(language) {
    if ($scope.language == language) {
      $log.warn('user language already in use: ' + language);
    } else if (language === $scope.portugueseLanguage) {
      $scope.language = $scope.portugueseLanguage;
      localStorage.setItem('language', $scope.language);
      $log.info('action user preference language change for: ' + language);
    } else if (language === $scope.englishLanguage) {
      $scope.language = $scope.englishLanguage;
      localStorage.setItem('language', $scope.language);
      $log.info('action user preference language change for: ' + language);
    } else {
      $log.error('unreconized value!');
    }
  }
  $scope.userLanguagePreference = function(language) {
    if (language === undefined) {
      const languagePreference = localStorage.getItem('language');
      if (languagePreference === null) {
        $scope.userLanguageStarter();
      } else {
        $scope.language = languagePreference;
      }
    } else if ($scope.language !== language) {
      $scope.userLanguagePreferenceUpdate(language);
    }
  }
  $scope.changeLanguageEN = function() {
    $scope.userLanguagePreference('en');
    $scope.orderTextValue = "order by";
    $scope.newestTextValue = "newest";
    $scope.oldestTextValue = "oldest";
    $scope.topicTextValue = "topic"
    $scope.articlesTextValue = 'articles';
    $scope.papersTextValue = 'papers';
    $scope.languageLabel = 'language';
    $scope.languageENTextValue = "english";
    $scope.languagePTTextValue = "portuguese";
    $scope.tableDateLabel = 'DATE';
    $scope.tableSubjectLabel = 'SUBJECT';
    $scope.tablePageLabel = "PAGE"
    document.getElementById('languageEN').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('languagePT').setAttribute('class', 'text-dark');
  }
  $scope.changeLanguagePT = function() {
    $scope.userLanguagePreference('pt');
    $scope.orderTextValue = "ordernar por";
    $scope.newestTextValue = "recente";
    $scope.oldestTextValue = "antigo";
    $scope.topicTextValue = "topico";
    $scope.articlesTextValue = 'artigos';
    $scope.papersTextValue = 'apresentações';
    $scope.languageLabel = 'idioma';
    $scope.languageENTextValue = "inglês";
    $scope.languagePTTextValue = "português";
    $scope.tableDateLabel = 'DATA';
    $scope.tableSubjectLabel = 'ASSUNTO';
    $scope.tablePageLabel = "PÁGINA";
    document.getElementById('languagePT').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('languageEN').setAttribute('class', 'text-dark');
  }
  $scope.userLanguagePreference(undefined);
  if ($scope.language === 'pt') {
    $scope.changeLanguagePT();
  } else {
    $scope.changeLanguageEN();
  }
  $http.defaults.cache = false;
  $scope.resources = [];
  $scope.articles = [];
  $scope.papers = [];
  $scope.retrieve_articles = function(sincronizedCallback) {
	if ($scope.articles !== undefined) {
	  $http.get("articles.json?v=1234567890")
	    .then(function(response){
		  $scope.articles = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesOldest = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesNewest = JSON.parse(JSON.stringify(response.data.reverse()));
		  sincronizedCallback();
	    }, function(error) {
		  console.error(error);
	    });
    } else {
		sincronizedCallback();
	}
  };
  $scope.papersLanguagePreference = function() {
    if ($scope.language === $scope.portugueseLanguage) {
      $scope.papers.forEach(function(paper) {
        paper.body = paper.pt_body;
	  });
    } else if ($scope.language === $scope.englishLanguage) {
      $scope.papers.forEach(function(paper) {
        paper.body = paper.en_body;
      });
    }
    $scope.resourcesOldest = JSON.parse(JSON.stringify($scope.papers));
    $scope.resourcesNewest = JSON.parse(JSON.stringify($scope.papers.reverse()));
  }
  $scope.retrieve_papers = function(sincronizedCallback) {
	if ($scope.papers !== undefined) {
      $http.get("papers.json?v=1234567890")
        .then(function(response) {
		  $scope.papers = JSON.parse(JSON.stringify(response.data));
          $scope.papersLanguagePreference();
		  sincronizedCallback();
	    }, function(error) {
		  console.error(error);
	    });
	} else {
		sincronizedCallback();
	}
  };
  $scope.paginator = function() {
	$scope.resourcesListSize = $scope.resources.length;
    $scope.resourcesMaxItemsPage = 4;
    $scope.resourcesCurrentPage = 1;
    $scope.resourcesTotalPages = Math.ceil($scope.resourcesListSize / $scope.resourcesMaxItemsPage);
    $scope.resourcesChangePage = function(pageNumber) {
      if ($scope.resourcesCurrentPage != pageNumber) {
        $scope.resourcesCurrentPage = pageNumber;
      }
    }
  }
  $scope.enableOrderByNewest = true;
  $scope.enableOrderByOldest - false;
  $scope.orderByNewest = function() {
	$scope.resources = $scope.resourcesNewest;
    $scope.enableOrderByNewest = true;
    document.getElementById('newestId').setAttribute('class', 'text-dark fw-bold');
    $scope.enableOrderByOldest = false;
    document.getElementById('oldestId').setAttribute('class', 'text-dark');
  }
  $scope.orderByOldest = function() {
	$scope.resources = $scope.resourcesOldest;
    $scope.enableOrderByOldest = true;
    document.getElementById('oldestId').setAttribute('class', 'text-dark fw-bold');
    $scope.enableOrderByNewest = false;
    document.getElementById('newestId').setAttribute('class', 'text-dark');
  }
  $scope.orderBy = function() {
    if ($scope.enableOrderByNewest) {
      $scope.orderByNewest();
	} else {
      $scope.orderByOldest();
	}
  }
  $scope.enableViewArticlesTable = false;
  $scope.enableViewPapersTable = false;
  $scope.changeTopicViewForArticlesTable = function() {
    var sincronized = function() {
	  $scope.enableViewArticlesTable = true;
      document.getElementById('articlesLabel').setAttribute('class', 'text-dark fw-bold');
      $scope.enableViewPapersTable = false;
      document.getElementById('papersLabel').setAttribute('class', 'text-dark');
	  $scope.orderBy();
	  $scope.paginator();
	}
	$scope.retrieve_articles(sincronized);
  }
  $scope.changeTopicViewForPapersTable = function() {
    var sincronized = function() {
	  $scope.enableViewPapersTable = true;
      document.getElementById('papersLabel').setAttribute('class', 'text-dark fw-bold');
      $scope.enableViewArticlesTable = false;
      document.getElementById('articlesLabel').setAttribute('class', 'text-dark');
	  $scope.orderBy();
	  $scope.paginator();
	}
	$scope.retrieve_papers(sincronized);
  }
  $scope.changeTopicViewForPapersTable();
  $scope.actionChangeLanguage = function(language) {
    if ($scope.language == language) {
      $log.warn('user language already in use: ' + language);
    } else if (language === $scope.portugueseLanguage) {
      $scope.changeLanguagePT();
    } else if (language === $scope.englishLanguage) {
      $scope.changeLanguageEN();
    } else {
      $log.error('unrecognized value!');
    }
  }
});