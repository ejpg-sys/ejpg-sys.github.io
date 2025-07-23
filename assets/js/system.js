/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var userLanguage = 'en';
var userLanguages = navigator.languages;    
var i = 0;
while( i < userLanguages.length) {
  if (userLanguages[i] === 'pt' || userLanguages[i] === 'pt-BR') {
    userLanguage = 'pt';
    break;
  }
  i+=1;
}
var system = angular.module("system", []);
system.controller("ctrl", function ($scope,$http) { 
  $scope.pageTitle = "EJPG-SYS on GITHUB.IO";
  $scope.language = userLanguage;
  $scope.changeLanguageEN = function() {
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
  if (userLanguage = 'pt') {
    $scope.changeLanguagePT();
  }   else {
    $scope.changeLanguageEN();
  }
  $http.defaults.cache = false;
  $scope.resources = [];
  $scope.articles = [];
  $scope.papers = [];
  $scope.retrieve_articles = function() {
	if ($scope.articles !== undefined) {
	  $http.get("articles.json")
	    .then(function(response){
		  $scope.articles = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesOldest = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesNewest = JSON.parse(JSON.stringify(response.data.reverse()));
	    }, function(error) {
		  console.error(error);
	    });
    }
  };
  $scope.retrieve_papers = function() {
	if ($scope.papers !== undefined) {
      $http.get("papers.json")
        .then(function(response) {
		  $scope.papers = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesOldest = JSON.parse(JSON.stringify(response.data));
		  $scope.resourcesNewest = JSON.parse(JSON.stringify(response.data.reverse()));
	    }, function(error) {
		  console.error(error);
	    });
	}
  };
  $scope.resourcesListSize = $scope.resources.length;
  $scope.resourcesMaxItemsPage = 4;
  $scope.resourcesCurrentPage = 1;
  $scope.resourcesTotalPages = Math.round($scope.resourcesListSize / $scope.resourcesMaxItemsPage);
  $scope.resourcesChangePage = function(pageNumber) {
    if ($scope.resourcesCurrentPage != pageNumber) {
      $scope.resourcesCurrentPage = pageNumber;
    }
  }
  $scope.enableOrderByNewest = true;
  $scope.enableOrderByOldest - false;
  $scope.orderByNewest = function() {
	$scope.resources = $scope.resourcesNewest;
    $scope.enableOrderByNewest = true;
    document.getElementById('newestId').setAttribute('class', 'text-dark fw-bold');
    $scope.enableOrderByOldest - false;
    document.getElementById('oldestId').setAttribute('class', 'text-dark');
  }
  $scope.orderByOldest = function() {
	$scope.resources = $scope.resourcesOldest;
    $scope.enableOrderByOldest - true;
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
    $scope.retrieve_articles();
    $scope.enableViewArticlesTable = true;
    document.getElementById('articlesLabel').setAttribute('class', 'text-dark fw-bold');
    $scope.enableViewPapersTable = false;
    document.getElementById('papersLabel').setAttribute('class', 'text-dark');
	$scope.orderBy();
  }
  $scope.changeTopicViewForPapersTable = function() {
    $scope.retrieve_papers();
    $scope.enableViewPapersTable = true;
    document.getElementById('papersLabel').setAttribute('class', 'text-dark fw-bold');
    $scope.enableViewArticlesTable = false;
    document.getElementById('articlesLabel').setAttribute('class', 'text-dark');
	$scope.orderBy();
  }
  $scope.changeTopicViewForPapersTable();
});