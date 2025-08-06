/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("termsService", function($log, $rootScope) {
  var _userDataAttrName = 'terms-user-privacy';
  var _systDataAttrName = 'terms-data-storage';
  var _getPrivacyConfirmDate = function() {
    return localStorage.getItem(_userDataAttrName);
  };
  var _getDataStorageConfirmDate = function() {
    return localStorage.getItem(_systDataAttrName);
  };
  var _setPrivacyConfirmDate = function() {
    if (_getPrivacyConfirmDate() === null) {
      const currentDateTime = Date.now();
      localStorage.setItem(_userDataAttrName, currentDateTime);
    } else {
      $log.warn('Privacy confirm date already in: ' + _getPrivacyConfirmDate().toISOString());
    }
  };
  var _setDataStorageConfirmDate = function() {
    if (_getDataStorageConfirmDate() === null) {
      const currentDateTime = Date.now();
      localStorage.setItem(_systDataAttrName, currentDateTime);
    } else {
      $log.warn('Terms confirm date already in: ' + _getDataStorageConfirmDate().toISOString());
    }
  }
  var _termsConfirm = function() {
    if (_getPrivacyConfirmDate === null) {
      return false;
    } else if (_getDataStorageConfirmDate() === null) {
      return false;
    }
    return true;
  }
  return {
    getPrivacyConfirmDate: _getPrivacyConfirmDate,
    getDataStorageConfirmDate: _getDataStorageConfirmDate,
    setPrivacyConfirmDate: _setPrivacyConfirmDate,
    setDataStorageConfirmDate: _setDataStorageConfirmDate,
    termsConfirm: _termsConfirm
  };
});