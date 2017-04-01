function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('ArticlesController', function($rootScope, $scope, $state, $stateParams, $auth, article) {

      // method to query the posts api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      var article_query = function(){
        article.query().then(function(articles){
          $scope.articles = articles;
        });
      }

      // when the user logs in, fetch the articles
      $rootScope.$on('auth:login-success', function(ev, user) {
        article_query();
      });

      // when the user logs out, remove the articles
      $rootScope.$on('auth:logout-success', function(ev) {
        $scope.articles = null;
      });

      // will get a "401 Unauthorized" if the user is not authenticated
      article_query();

    });

})();