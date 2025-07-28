/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("languageService", function($log) {
  var portugueseLanguage = 'pt';
  var englishLanguage = 'en';
  var _userLanguageStarter = function() {
    var userLanguage = undefined;
    var userLanguages = navigator.languages;
    var i = 0;
    while(i < userLanguages.length) {
      if (userLanguages[i] === 'pt' || userLanguages[i] === 'pt-BR') {
        userLanguage = portugueseLanguage;
        localStorage.setItem('language', portugueseLanguage);
        break;
      }
      i+=1;
    }
    if (userLanguage === undefined) {
      userLanguage = englishLanguage;
      localStorage.setItem('language', userLanguage);
    }
  }
  var _userLanguagePreferenceUpdate = function(language) {
    if (language == language) {
      $log.warn('user language already in use: ' + language);
    } else if (language === portugueseLanguage) {
      language = portugueseLanguage;
      localStorage.setItem('language', language);
      $log.info('action user preference language change for: ' + language);
    } else if (language === englishLanguage) {
      language = englishLanguage;
      localStorage.setItem('language', language);
      $log.info('action user preference language change for: ' + language);
    } else {
      $log.error('unreconized value!');
    }
  }
  var _userLanguagePreference = function(language) {
    if (language === undefined) {
      const languagePreference = localStorage.getItem('language');
      if (languagePreference === null) {
        userLanguageStarter();
      } else {
        language = languagePreference;
      }
    } else if (language !== language) {
      userLanguagePreferenceUpdate(language);
    }
  }
  return {
    userLanguageStarter: _userLanguageStarter,
	userLanguagePreferenceUpdate: _userLanguagePreferenceUpdate,
	userLanguagePreference: _userLanguagePreference
  };
});