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
  $scope.topic = {
    current: undefined,
    articles: 'articles',
    papers: 'papers'
  };
  $scope.orderBy = {
    current: undefined,
    newest: 'asc',
	oldest: 'desc'
  };
  $http.defaults.cache = false;
  $scope.resources = [];
  $scope.articles = [];
  $scope.papers = [];
  $scope.retrieve_articles = function(sincronizedCallback) {
	if ($scope.articles.length === 0) {
	  $http.get("articles.json?v=1234567890")
	    .then(function(response){
		  $scope.articles = JSON.parse(JSON.stringify(response.data));
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
  }
  $scope.retrieve_papers = function(sincronizedCallback) {
	if ($scope.papers.length === 0) {
      $http.get("papers.json?v=1234567890")
        .then(function(response) {
		  $scope.papers = JSON.parse(JSON.stringify(response.data));
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
  $scope.orderByNewest = function() {
    $scope.orderBy.current = $scope.orderBy.newest;
	$scope.resources.sort((a, b) => b.order_id - a.order_id);
    document.getElementById('newestId').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('oldestId').setAttribute('class', 'text-dark');
  }
  $scope.orderByOldest = function() {
    $scope.orderBy.current = $scope.orderBy.oldest;
    $scope.resources.sort(function(a,b){
      return a.order_id - b.order_id;
    });
    document.getElementById('oldestId').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('newestId').setAttribute('class', 'text-dark');
  }
  $scope.orderByPreference = function() {
    if ($scope.orderBy.current == undefined) {
      $scope.orderByNewest();
    } else if ($scope.orderBy.current == $scope.orderBy.newest){
      $scope.orderByNewest();
    } else if ($scope.orderBy.current == $scope.orderBy.oldest) {
      $scope.orderByOldest();
    } else {
      $log.debug('unrecognized value!');
	}
  }
  $scope.choiceTopicViewForArticlesTable = function() {
    var sincronized = function() {
      $scope.topic.current = $scope.topic.articles;
      $scope.resources = $scope.articles;
      $scope.orderByPreference();
      $scope.paginator();
      document.getElementById('articlesLabel').setAttribute('class', 'text-dark fw-bold');
      document.getElementById('papersLabel').setAttribute('class', 'text-dark');
	}
	$scope.retrieve_articles(sincronized);
  }
  $scope.choiceTopicViewForPapersTable = function() {
    var sincronized = function() {
      $scope.topic.current = $scope.topic.papers;
      $scope.resources = $scope.papers;
      $scope.papersLanguagePreference();
      $scope.orderByPreference();
      $scope.paginator();
      document.getElementById('papersLabel').setAttribute('class', 'text-dark fw-bold');
      document.getElementById('articlesLabel').setAttribute('class', 'text-dark');
	}
	$scope.retrieve_papers(sincronized);
  }
  $scope.choiceLanguageEN = function() {
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
    $scope.tablePageLabel = "PAGE";
    document.getElementById('languageEN').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('languagePT').setAttribute('class', 'text-dark');
  }
  $scope.choiceLanguagePT = function() {
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
  $scope.actionChangeLanguage = function(language) {
    if ($scope.language == language) {
      $log.warn('user language already in use: ' + language);
    } else if (language === $scope.portugueseLanguage) {
      $scope.choiceLanguagePT();
      $scope.papersLanguagePreference();
    } else if (language === $scope.englishLanguage) {
      $scope.choiceLanguageEN();
      $scope.papersLanguagePreference();
    } else {
      $log.error('unrecognized value!');
    }
  }
  $scope.actionChangeTopic = function(topic) {
    if (topic === $scope.topic.current) {
      $log.warn('user topic already in use: ' + topic);
    } else if (topic === $scope.topic.articles) {
      $scope.choiceTopicViewForArticlesTable();
	} else if (topic === $scope.topic.papers) {
      $scope.choiceTopicViewForPapersTable();
	} else {
      $log.error('unrecognized value!');
    }
  }
  $scope.actionChangeOrderBy = function(orderBy) {
    if (orderBy === $scope.orderBy.current) {
      $log.warn('user orderby already in use: ' + orderBy);
    } else if (orderBy === 'asc') {
      $scope.orderByNewest();
	} else if (orderBy === 'desc') {
      $scope.orderByOldest();
	} else {
      $log.error('unrecognized value!');
    }
  }
  $scope.defaultStarter = function() {
    $scope.userLanguagePreference(undefined);
    if ($scope.language === 'pt') {
      $scope.choiceLanguagePT();
    } else {
      $scope.choiceLanguageEN();
    }
    $scope.choiceTopicViewForPapersTable();
  }
  $scope.defaultStarter();
});
system.directive('blog', function() {
  return {
    templateUrl: '/assets/partials/blog.html'
  }
});