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
       .state('messages', {
        url: '/messages',
        templateUrl: 'app/messages/messages.html',
        controller: 'MessagesController',
        controllerAs: 'messages',
        //css:'app/css/styles.css'
      });
       .state('conversations', {
        url: '/conversations',
        templateUrl: 'app/conversations/conversations.html',
        controller: 'ConversationsController',
        controllerAs: 'conversations',
        //css:'app/css/styles.css'
      });
       .state('participations', {
        url: '/participations',
        templateUrl: 'app/participations/participations.html',
        controller: 'ParticipationsController',
        controllerAs: 'participations',
        //css:'app/css/styles.css'
      });
       .state('articles', {
        url: '/articles',
        templateUrl: 'app/articles/articles.html',
        controller: 'ArticlesController',
        controllerAs: 'articles',
        //css:'app/css/styles.css'
      });

    $urlRouterProvider.otherwise('/');
  }

})();