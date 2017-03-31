(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('PostsController', function($rootScope, $scope, $state, $stateParams, $auth, Post) {

      // method to query the posts api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      var post_query = function(){
        Post.query().then(function(posts){
          $scope.posts = posts;
        });
      }

      // when the user logs in, fetch the posts
      $rootScope.$on('auth:login-success', function(ev, user) {
        post_query();
      });

      // when the user logs out, remove the posts
      $rootScope.$on('auth:logout-success', function(ev) {
        $scope.posts = null;
      });

      // will get a "401 Unauthorized" if the user is not authenticated
      post_query();

    });

})();