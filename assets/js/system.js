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
  $scope.defaultStarter = function() {
    $scope.userLanguagePreference(undefined);
  }
  $scope.defaultStarter();
});