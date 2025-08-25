/**
 * Attribution-NonCommercial-NoDerivatives 4.0 International
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("languageService", ['$log', '$rootScope', function($log, $rootScope) {
  var _portugueseLanguage = 'pt';
  var _englishLanguage = 'en';
  var _get = function() {
    return localStorage.getItem('language')
  }
  var _eventUserLanguageBroadcast = function(language) {
    if (language !== undefined) {
      if (language === _portugueseLanguage || language == _englishLanguage) {
        $rootScope.$broadcast('languageEvent', language);
      } else {
        $log.info('unreconized value!');
      }
    }
  }
  var _userLanguageStarter = function() {
    var userLanguage = undefined;
    var userLanguages = navigator.languages;
    var i = 0;
    while(i < userLanguages.length) {
      if (userLanguages[i] === 'pt' || userLanguages[i] === 'pt-BR') {
        userLanguage = _portugueseLanguage;
        localStorage.setItem('language', userLanguage);
        break;
      }
      i+=1;
    }
    if (userLanguage === undefined) {
      userLanguage = _englishLanguage;
      localStorage.setItem('language', userLanguage);
    }
    _eventUserLanguageBroadcast(userLanguage);
  }
  var _userLanguagePreferenceUpdate = function(language) {
    if (_get() === language) {
      $log.warn('user language already in use: ' + language);
    } else if (language === _portugueseLanguage) {
      localStorage.setItem('language', _portugueseLanguage);
      $log.info('action user preference language change for: ' + language);
      _eventUserLanguageBroadcast(_portugueseLanguage);
    } else if (language === _englishLanguage) {
      localStorage.setItem('language', _englishLanguage);
      $log.info('action user preference language change for: ' + language);
      _eventUserLanguageBroadcast(_englishLanguage);
    } else {
      $log.error('unreconized value!');
    }
  }
  var _userLanguagePreference = function(language) {
    if (language === undefined) {
      const languagePreference = localStorage.getItem('language');
      if (languagePreference === null) {
        _userLanguageStarter();
      }
    } else if (_get() !== language) {
      _userLanguagePreferenceUpdate(language);
    }
  }
  return {
    portugueseLanguage: _portugueseLanguage,
    englishLanguage: _englishLanguage,
    get: _get,
	userLanguagePreferenceUpdate: _userLanguagePreferenceUpdate,
	userLanguagePreference: _userLanguagePreference
  };
}]);