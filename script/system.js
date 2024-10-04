var system = angular.module("system", []);
system.controller("systemCtrl", function ($scope) {
  $scope.appname = "hello!";
  $scope.article = angular.fromJson("article.json");
});
