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

(function main() {
  var iprogress = 0;
  var progressInterval = setInterval(function() {
    if (iprogress <= 5) {
      iprogress++;
    } else {
      clearInterval(progressInterval);
    }
  }, 500);
})();

