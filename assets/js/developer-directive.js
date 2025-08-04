/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('developer', function() {
  return {
    templateUrl: '/assets/partials/developer.html',
    replace: true,
    restrict: 'E',
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
    }
  }
});