/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("contextService", function($log, $rootScope) {
  var _active = undefined;
  var _contexts = ['home','services','products','blog','about'];
  var _pageHome     = _contexts[0];
  var _pageServices = _contexts[1];
  var _pageProducts = _contexts[2];
  var _pageBlog     = _contexts[3];
  var _pageAbout    = _contexts[4];
  var _eventUserPageContextBroadcast = function(context) {
    var found = false;
    if (context !== undefined) {
      let i = 0;
      while (i < _contexts.length) {
        if (context === _contexts[i]) {
          $rootScope.$broadcast('contextEvent', context);
          found = true;
          break;
        }
		i = i + 1;
      }
    }
    if (!found) {
      $log.info('unreconized value!');
    }
  }
  var _set = function(context) {
    var found = false;
    if (context === undefined) {
      _active = _pageHome;
      _eventUserPageContextBroadcast(_pageHome);
      found = true;
    }
    if (!found && context !== undefined) {
      let i = 0;
      while (i < _contexts.length) {
        if (context === _contexts[i]) {
          _active = context;
          _eventUserPageContextBroadcast(context);
          found = true;
          break;
        }
        i = i + 1;
      }
    }
    if (!found) {
      $log.info('unreconized value!');
    }
  }
  var _get = function() {
    return _active;
  }
  var _initializer = function() {
    _set(undefined);
  }
  _initializer();
  return {
    contexts: _contexts,
    pageHome: _pageHome,
    pageServices: _pageServices,
    pageProducts: _pageProducts,
    pageBlog: _pageBlog,
    pageAbout: _pageAbout,
    set: _set,
    get: _get
  };
});