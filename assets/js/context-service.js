/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("contextService", function($log, $rootScope) {
  var _active = undefined;
  var _contexts = ['home','services','products','blog','about'];
  var _pageHome = 'home';
  var _pageBlog = 'blog';
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
    pageHome: _pageHome,
    pageBlog: _pageBlog,
    set: _set,
    get: _get
  };
});