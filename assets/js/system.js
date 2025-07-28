/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
var system = angular.module("system", []);
system.controller("ctrl", function ($scope, $http, $log, languageService) {
  languageService.userLanguagePreference(undefined);
});