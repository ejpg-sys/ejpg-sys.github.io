/**
 * Attribution-NonCommercial-NoDerivatives 4.0 International
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('blog', ['$log', '$http', 'languageService', '$rootScope', function($log, $http, languageService, $rootScope) {
  return {
    templateUrl: '/assets/partials/blog.html',
    replace: true,
    restrict: 'E',
    scope: {
      language: '@language'
    },
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      scope.pageTitle = "EJPG-SYS on GITHUB.IO";
      scope.topic = {
        current: undefined,
        articles: 'articles',
        papers: 'papers'
      };
      scope.orderBy = {
        current: undefined,
        newest: 'asc',
        oldest: 'desc'
      };
      $http.defaults.cache = false;
      scope.resources = [];
      scope.articles = [];
      scope.papers = [];
      scope.retrieve_articles = function(sincronizedCallback) {
        if (scope.articles.length === 0) {
          $http.get("articles.json?v=1234567890")
            .then(function(response){
              scope.articles = JSON.parse(JSON.stringify(response.data));
              sincronizedCallback();
            }, function(error) {
              console.error(error);
            });
        } else {
           sincronizedCallback();
        }
      };
      scope.papersLanguagePreference = function() {
        if (languageService.get() === languageService.portugueseLanguage) {
          scope.papers.forEach(function(paper) {
            paper.body = paper.pt_body;
          });
        } else if (languageService.get() === languageService.englishLanguage) {
          scope.papers.forEach(function(paper) {
            paper.body = paper.en_body;
          });
        }
      }
      scope.retrieve_papers = function(sincronizedCallback) {
        if (scope.papers.length === 0) {
          $http.get("papers.json?v=1234567890")
            .then(function(response) {
              scope.papers = JSON.parse(JSON.stringify(response.data));
              sincronizedCallback();
            }, function(error) {
              console.error(error);
            });
        } else {
          sincronizedCallback();
        }
      };
      scope.cleanPageSelection = function() {
        if (scope.resourcesCurrentPage !== undefined) {
          document.getElementById('pageId'+scope.resourcesCurrentPage).setAttribute('class', 'text-dark');
        }
      }
      scope.paginator = function() {
        scope.cleanPageSelection();
        scope.resourcesListSize = scope.resources.length;
        scope.resourcesMaxItemsPage = 4;
        scope.resourcesCurrentPage = 1;
        scope.resourcesTotalPages = Math.ceil(scope.resourcesListSize / scope.resourcesMaxItemsPage);
        document.getElementById('pageId'+scope.resourcesCurrentPage).setAttribute('class', 'text-dark fw-bold');
      }
      scope.actionChangePage = function(pageNumber) {
        if (scope.resourcesCurrentPage != pageNumber) {
          scope.cleanPageSelection();
          document.getElementById('pageId'+pageNumber).setAttribute('class', 'text-dark fw-bold');
          scope.resourcesCurrentPage = pageNumber;
        } else {
          $log.warn('user page already active!');
        }
      }
      scope.orderByNewest = function() {
        scope.orderBy.current = scope.orderBy.newest;
        scope.resources.sort((a, b) => b.order_id - a.order_id);
        document.getElementById('newestId').setAttribute('class', 'text-dark fw-bold');
        document.getElementById('oldestId').setAttribute('class', 'text-dark');
        scope.paginator();
      }
      scope.orderByOldest = function() {
        scope.orderBy.current = scope.orderBy.oldest;
        scope.resources.sort(function(a,b){
          return a.order_id - b.order_id;
        });
        document.getElementById('oldestId').setAttribute('class', 'text-dark fw-bold');
        document.getElementById('newestId').setAttribute('class', 'text-dark');
        scope.paginator();
      }
      scope.orderByPreference = function() {
        if (scope.orderBy.current == undefined) {
          scope.orderByNewest();
        } else if (scope.orderBy.current == scope.orderBy.newest){
          scope.orderByNewest();
        } else if (scope.orderBy.current == scope.orderBy.oldest) {
          scope.orderByOldest();
        } else {
          $log.debug('unrecognized value!');
        }
      }
      scope.choiceTopicViewForArticlesTable = function() {
        var sincronized = function() {
          scope.topic.current = scope.topic.articles;
          scope.resources = scope.articles;
          scope.orderByPreference();
          scope.paginator();
          document.getElementById('articlesLabel').setAttribute('class', 'text-dark fw-bold');
          document.getElementById('papersLabel').setAttribute('class', 'text-dark');
        }
	    scope.retrieve_articles(sincronized);
      }
      scope.choiceTopicViewForPapersTable = function() {
        var sincronized = function() {
          scope.topic.current = scope.topic.papers;
          scope.resources = scope.papers;
          scope.papersLanguagePreference();
          scope.orderByPreference();
          scope.paginator();
          document.getElementById('papersLabel').setAttribute('class', 'text-dark fw-bold');
          document.getElementById('articlesLabel').setAttribute('class', 'text-dark');
        }
        scope.retrieve_papers(sincronized);
      }
      scope.choiceLanguageEN = function() {
        scope.license = 'License';
        scope.orderTextValue = "order by";
        scope.newestTextValue = "newest";
        scope.oldestTextValue = "oldest";
        scope.topicTextValue = "topic"
        scope.articlesTextValue = 'articles';
        scope.papersTextValue = 'papers';
        scope.languageLabel = 'language';
        scope.languageENTextValue = "english";
        scope.languagePTTextValue = "portuguese";
        scope.tableDateLabel = 'DATE';
        scope.tableSubjectLabel = 'SUBJECT';
        scope.tablePageLabel = "PAGE";
        scope.resourceReaderBtnCloseLabel = "Close";
        document.getElementById('languageEN').setAttribute('class', 'text-dark fw-bold');
        document.getElementById('languagePT').setAttribute('class', 'text-dark');
        scope.resourceReaderPaperRedirection = {
          titleText: 'Redirection',
          bodyText: 'You will be redirecioned to github page for reading',
          declineText: 'Decline',
          acceptText: 'Accept'
        }
        scope.contextHome = 'Home';
        scope.contextBlog = 'Blog';
        scope.contextBlogSD = 'Software Development';
      }
      scope.choiceLanguagePT = function() {
        scope.license = 'Licença';
        scope.orderTextValue = "ordernar por";
        scope.newestTextValue = "recente";
        scope.oldestTextValue = "antigo";
        scope.topicTextValue = "topico";
        scope.articlesTextValue = 'artigos';
        scope.papersTextValue = 'apresentações';
        scope.languageLabel = 'idioma';
        scope.languageENTextValue = "inglês";
        scope.languagePTTextValue = "português";
        scope.tableDateLabel = 'DATA';
        scope.tableSubjectLabel = 'ASSUNTO';
        scope.tablePageLabel = "PÁGINA";
        scope.resourceReaderBtnCloseLabel = "Fechar";
        document.getElementById('languagePT').setAttribute('class', 'text-dark fw-bold');
        document.getElementById('languageEN').setAttribute('class', 'text-dark');
        scope.resourceReaderPaperRedirection = {
          titleText: 'Redirecionamento',
          bodyText: 'Você será redirecionado para a página do github para a leitura',
          declineText: 'Declinar',
          acceptText: 'Aceitar'
        }
        scope.contextHome = 'Início';
        scope.contextBlog = 'Blog';
        scope.contextBlogSD = 'Desenvolvimento de Software';
      }
      scope.actionChangeLanguage = function(language) {
        if (languageService.get() == language) {
          $log.warn('user language already in use: ' + language);
        } else if (languageService.portugueseLanguage === language) {
          scope.choiceLanguagePT();
          scope.papersLanguagePreference();
        } else if (languageService.englishLanguage === language) {
          scope.choiceLanguageEN();
          scope.papersLanguagePreference();
        } else {
          $log.error('unrecognized value!');
        }
      }
      scope.actionChangeTopic = function(topic) {
        if (topic === scope.topic.current) {
          $log.warn('user topic already in use: ' + topic);
        } else if (topic === scope.topic.articles) {
          scope.choiceTopicViewForArticlesTable();
        } else if (topic === scope.topic.papers) {
          scope.choiceTopicViewForPapersTable();
        } else {
          $log.error('unrecognized value!');
        }
      }
      scope.actionChangeOrderBy = function(orderBy) {
        if (orderBy === scope.orderBy.current) {
          $log.warn('user orderby already in use: ' + orderBy);
        } else if (orderBy === 'asc') {
          scope.orderByNewest();
        } else if (orderBy === 'desc') {
          scope.orderByOldest();
        } else {
          $log.error('unrecognized value!');
        }
      }
      scope.resourceReader = {
        titleText: undefined,
        bodyText: {
          lines: undefined
        }
      };
      scope.actionResourceReaderArticle = function(article) {
        scope.resourceReader.titleText = article.title;
        scope.resourceReader.dateTime = article.date_time;
        var articleRef = article.body;
        $http.get(articleRef)
          .then(function(response) {
            var contextText = response.data.split('\n');
            var englishContentMatch = '[en]';
            var contextTextEnglish = [];
            var englishContentInit = 0;
            var englishContentEnd = 0;
            var portugueseContentMatch = '[pt]';
            var contextTextPortuguese = [];
            var portugueseContentInit = 0;
            var portugueseContentEnd = 0;
			var i = 0;
            while (i < contextText.length) {
              var inspection = '' + contextText[i];
              if (inspection.toLowerCase().indexOf(englishContentMatch) != -1) {
                englishContentInit = i;
                i+=1;
              } else if (inspection.toLowerCase().indexOf(portugueseContentMatch) != -1) {
                englishContentEnd = i-1;
                portugueseContentInit = i;
                portugueseContentEnd = contextText.length;
                break;
              }
              i+=1;
            }
            var e = 0;
            contextTextEnglish.push('');
            while (e < englishContentEnd) {
              contextTextEnglish.push(contextText[e]);
              e++;
            }
            var p = portugueseContentInit;
            contextTextPortuguese.push('');
            while (p < portugueseContentEnd) {
              contextTextPortuguese.push(contextText[p]);
              p++;
            }
            if (languageService.get() == languageService.portugueseLanguage) {
              scope.resourceReader.bodyText.lines = contextTextPortuguese;
            } else {
              scope.resourceReader.bodyText.lines = contextTextEnglish;
            }
            $('#readerModalFullscreen').modal('toggle');
          }, function(error) {
            $log.error(error);
          });
        $('#readerModalFullscreen').modal('toggle');
      }
      scope.actionResourceReaderOpenPaper = function(paperRef) {
        scope.paperRefRedirectionAccept = paperRef;
        $('#readerModalDefault').modal('toggle');
      }
      scope.actionResourceReaderPaperRefRedirectionAccept = function() {
        window.location.assign(scope.paperRefRedirectionAccept);
      }
      scope.actionResourceReaderPaperRefRedirectionDecline = function() {
        scope.paperRefRedirectionAccept = undefined;
        $('#readerModalDefault').modal('hide');
      }
      scope.actionResourceReaderLicense = function() {
        scope.resourceReader.titleText = scope.license;
        var licenseTextRef = undefined;
        if (languageService.get() === languageService.portugueseLanguage) {
          licenseTextRef = '/license-blog-pt.txt';
        } else {
          licenseTextRef = '/license-blog.txt';
        }
        $http.get(licenseTextRef)
          .then(function(response) {
            scope.resourceReader.bodyText.lines = response.data.split('\n');
            $('#readerModalFullscreen').modal('toggle');
          }, function(error) {
            $log.error(error);
          });
      }
      scope.actionResourceReaderOpen = function(resource) {
        if (resource.article_id !== undefined) {
          scope.actionResourceReaderArticle(resource);
        } else if (resource.paper_id !== undefined) {
          scope.actionResourceReaderOpenPaper(resource.body);
        } else if (resource === 'license') {
          scope.actionResourceReaderLicense();
        } else {
          $log.error('unrecognized value!');
        }
      }
      scope.actionResourceReaderClose = function() {
        $('#readerModalFullscreen').modal('hide');
        scope.resourceReader.dateTime = '';
        scope.resourceReader.titleText = '';
        scope.resourceReader.bodyText = [];
      }
      scope.blogInitializer = function() {
        if (languageService.get() === languageService.portugueseLanguage) {
          scope.choiceLanguagePT();
        } else {
          scope.choiceLanguageEN();
		}
        scope.choiceTopicViewForPapersTable();
      }
	  scope.blogInitializer();
      var _languageEventListener = function() {
        $rootScope.$on('languageEvent', function(event, data) {
          if (languageService.portugueseLanguage === data) {
            scope.choiceLanguagePT();
            scope.papersLanguagePreference();
          } else if (languageService.englishLanguage === data) {
            scope.choiceLanguageEN();
            scope.papersLanguagePreference();
          }
        });
      }
      _languageEventListener();
    }
  }
}]);