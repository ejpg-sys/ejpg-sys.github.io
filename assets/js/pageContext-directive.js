/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('pageContext', ['$log', '$rootScope', function($log, $rootScope) {
  return {
    templateUrl: '/assets/partials/pageContext.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
    }
  }
}]);