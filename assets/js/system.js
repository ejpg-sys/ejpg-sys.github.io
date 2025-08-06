/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
system.controller("ctrl", function ($scope, $http, $log, languageService, contextService, $rootScope, systemService) {
  languageService.userLanguagePreference(undefined);
  var _setHomeContextActive = function() {
    $scope.isHomeContextActive = true;
    $scope.isBlogContextActive = false;
  }
  var _setBlogContextActive = function() {
    $scope.isBlogContextActive = true;
    $scope.isHomeContextActive = false;
  }
  var _contextEventListener = function() {
    $rootScope.$on('contextEvent', function(event, data) {
      if (contextService.pageHome === data) {
        _setHomeContextActive();
      } else if (contextService.pageBlog === data) {
        _setBlogContextActive();
      }
    });
  }
  _contextEventListener();
  var _initializer = function() {
    if (contextService.get() === contextService.pageHome) {
      _setHomeContextActive();
    } else if (contextService.get() === contextService.pageBlog) {
      _setBlogContextActive();
    }
  }
  _initializer();
});