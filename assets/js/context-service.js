/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.factory("contextService", function($log, $rootScope) {
  var _active = undefined;
  var _contexts = [
   {
     name: 'home',
     action: undefined,
     visible: false
   },
   {
     name: 'services',
     action: undefined,
     visible: true
   },
   {
     name: 'products',
     action: undefined,
     visible: true
   },
   {
     name: 'blog',
     action: undefined,
     visible: true
   },
   {
     name: 'about',
     action: undefined,
     visible: true
   }
  ];
  var _pageHome     = _contexts[0].name;
  var _pageServices = _contexts[1].name;
  var _pageProducts = _contexts[2].name;
  var _pageBlog     = _contexts[3].name;
  var _pageAbout    = _contexts[4].name;
  var _eventUserPageContextBroadcast = function(context) {
    var found = false;
    if (context !== undefined) {
      let i = 0;
      while (i < _contexts.length) {
        if (context === _contexts[i].name) {
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
        if (context === _contexts[i].name) {
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