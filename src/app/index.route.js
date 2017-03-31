(function() {
  'use strict';

  angular
    .module('angularRails')
    .config(routerConfig)
    .factory('Post', ['railsResourceFactory', function(railsResourceFactory) {
      return railsResourceFactory({
        url: '/api/posts',
        name: 'post'
      });
    }]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('posts', {
        url: '/posts',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsController',
        controllerAs: 'posts',
        css:'app/css/styles.css'
      });

    $urlRouterProvider.otherwise('/');
  }

})();