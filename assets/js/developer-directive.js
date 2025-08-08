/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('developer', ['$log', '$rootScope', function($log, $rootScope) {
  return {
    templateUrl: '/assets/partials/developer.html',
    replace: false,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      var _loadingRefIdNotReady = function() {
        document.getElementById('loadingRefId').setAttribute('class', '');
      }
      var _loadingRefIdReady = function() {
        document.getElementById('loadingRefId').setAttribute('class', 'display-none');
      }
      var _initializer = function() {
        setTimeout(() => _loadingRefIdReady(), 5000);
      }
      _initializer();
    }
  }
}]);