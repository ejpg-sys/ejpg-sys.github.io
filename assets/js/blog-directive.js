/**
 * The MIT License (MIT)
 * Copyright (c) 2024-2025 EJPG-SYS
 */
system.directive('blog', function() {
  return {
    templateUrl: '/assets/partials/blog.html',
    replace: true,
    restrict: 'E',
    scope: {
      language: '@language'
    },
    transclude: false,
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      // TODO: implement!
    },
    required: '^ctrl',
    controller: function($scope, $element, $ctrl, $transclude) {
      // TODO: implement!
    }
  }
});