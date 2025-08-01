/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("contextService", function($log, $rootScope) {
  var _context = undefined;
  var _pageHome = 'home';
  var _pageBlog = 'blog';
  var _eventUserPageContextBroadcast = function(context) {
    if (context !== undefined) {
      if (context === _pageHome || context === _pageBlog) {
        $rootScope.$broadcast('contextEvent', context);
      } else {
        $log.info('unreconized value!');
      }
    }
  }
  var _set = function(context) {
    if (context === undefined) {
      _context = _pageHome;
      _eventUserPageContextBroadcast(_pageHome);
    } else if (context === _pageHome) {
      _context = _pageHome;
      _eventUserPageContextBroadcast(_pageHome);
    } else if (context === _pageBlog) {
      _context = _pageBlog;
      _eventUserPageContextBroadcast(_pageBlog);
    } else {
      $log.error('unreconized value!');
    }
  }
  var _get = function() {
    return _context;
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