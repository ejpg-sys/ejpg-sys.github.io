/**
 * Attribution-NonCommercial-NoDerivatives 4.0 International
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageContext', ['$log', '$rootScope', 'contextService', function($log, $rootScope, contextService) {
  return {
    templateUrl: '/assets/partials/pageContext.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var _setHomeContextActive = function() {
        scope.isHomeContextActive = true;
        scope.isBlogContextActive = false;
      }
      var _setBlogContextActive = function() {
        scope.isBlogContextActive = true;
        scope.isHomeContextActive = false;
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
    }
  }
}]);