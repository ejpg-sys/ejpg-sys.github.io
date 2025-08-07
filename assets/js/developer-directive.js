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
    }
  }
}]);