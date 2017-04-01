(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('MessagesController', function($rootScope, $scope, $state, $stateParams, $auth, message) {

      // method to query the messages api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      var message_query = function(){
        message.query().then(function(messages){
          $scope.messages = messages;
        });
      }

      // when the user logs in, fetch the messages
      $rootScope.$on('auth:login-success', function(ev, user) {
        message_query();
      });

      // when the user logs out, remove the messages
      $rootScope.$on('auth:logout-success', function(ev) {
        $scope.messages = null;
      });

      // will get a "401 Unauthorized" if the user is not authenticated
      message_query();

    });

})();