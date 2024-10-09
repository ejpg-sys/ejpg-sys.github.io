var system = angular.module("system", []);
system.controller("systemCtrl", function ($scope) {
$scope.appname = "hello!";
/**
fetch("article.json")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  $scope.article = data;
});
*/
var xhr = new XMLHttpRequest();
xhr.open('GET', 'article.json', true);
xhr.responseType = 'json';
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = xhr.response;
    $scope.article = data;
  }
}
xhr.send();
});