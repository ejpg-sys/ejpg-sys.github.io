/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("termsService", function($log, $rootScope) {
  var _getPrivacyConfirmDate = function() {
    return localStorage.getItem('user-data');
  };
  var _getDataStorageConfirmDate = function() {
    return localStorage.getItem('syst-data');
  };
  return {
  };
});