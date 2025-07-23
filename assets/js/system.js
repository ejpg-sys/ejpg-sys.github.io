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
  $scope.changeTopicViewForArticlesTable = function() {
    document.getElementById('articlesLabel').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('papersLabel').setAttribute('class', 'text-dark');
  }
  $scope.changeTopicViewForPapersTable = function() {
    document.getElementById('papersLabel').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('articlesLabel').setAttribute('class', 'text-dark');
  }
  $scope.orderByNewest = function() {
    document.getElementById('newestId').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('oldestId').setAttribute('class', 'text-dark');
  }
  $scope.orderByOldest = function() {
    document.getElementById('oldestId').setAttribute('class', 'text-dark fw-bold');
    document.getElementById('newestId').setAttribute('class', 'text-dark');
  }
  if (userLanguage = 'pt') {
    $scope.changeLanguagePT();
  }   else {
    $scope.changeLanguageEN();
  }
  $http.defaults.cache = false;
  $scope.articles = [];
  $scope.papers = [];
  $scope.retrieve_articles = function() {
	$http.get("articles.json")
	  .then(function(response){
		$scope.articles = response.data;
	  }, function(error) {
		console.error(error);
	  });
  };
  $scope.retrieve_papers = function() {
    $http.get("papers.json")
      .then(function(response) {
		$scope.papers = response.data;
	  }, function(error) {
		console.error(error);
	  });
  };
  $scope.retrieve_articles();
  $scope.retrieve_papers();
  $scope.artitlesListSize = $scope.articles.length;
  $scope.articlesMaxItemsPage = 4;
  $scope.articlesCurrentPage = 1;
  $scope.articlesTotalPages = Math.round($scope.artitlesListSize / $scope.articlesMaxItemsPage);
  $scope.articlesChangePage = function(pageNumber) {
    if ($scope.articlesCurrentPage != pageNumber) {
      $scope.articlesCurrentPage = pageNumber;
    }
  }
  $scope.changeTopicViewForPapersTable();
  $scope.orderByNewest();
});