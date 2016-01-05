angular
		.module('newsletter')
		.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['$scope', '$http'];
function NewsletterController($scope, $http) {

  $scope.newsletterForm = {
    allowComments: true,
    publish: true,
    showShareLinks: true,
    tags: 'newsletter',
    category: 'newsletter',
    name: 'Ionic Az Issue &#35;',
    postObject:{}
  };

  
  $scope.create = function (newsletterForm) {
    console.log('create', newsletterForm);
    var posts = angular.fromJson(newsletterForm.posts);
    newsletterForm.postObject = posts;
  };
  
  $scope.getOutput = function () {
    $scope.dataOutput = angular.element(output).text();    
  }
}

angular
		.module('newsletter')
  .filter('articleFilter', function () {
    return function (items) {
      if (items === undefined) { return; }
      var filtered = [];
      angular.forEach(items, function (item) {
        console.log('filter:item', item);
        if (item.Type === 'article') {
          item.Description = item.Description.replace(/[\n\r]/g, '<br />');
          filtered.push(item);
        }
      });
      return filtered;
    };
  })
  .filter('releaseFilter', function () {
    return function (items) {
      if (items === undefined) { return; }
      var filtered = [];
      angular.forEach(items, function (item) {
        console.log('filter:item', item);
        if (item.Type === 'release') {
          item.Description = item.Description.replace(/[\n\r]/g, '<br />');
          filtered.push(item);
        }
      });
      return filtered;
    };
  })
  .filter('eventFilter', function () {
    return function (items) {
      if (items === undefined) { return; }
      var filtered = [];
      angular.forEach(items, function (item) {
        console.log('filter:item', item);
        if (item.Type === 'event') {
          item.Description = item.Description.replace(/[\n\r]/g, '<br />');
          filtered.push(item);
        }
      });
      return filtered;
    };
  })
  .directive("autoGrow", function(){
    return function(scope, element, attr){
        var update = function(){
            element.css("height", "auto");
            element.css("height", element[0].scrollHeight + "px");
        };
        scope.$watch(attr.ngModel, function(){
            update();
        });
        attr.$set("ngTrim", "false");
    };
});
  