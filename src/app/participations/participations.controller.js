(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('ParticipationsController', function($rootScope, $scope, $state, $stateParams, $auth, participation) {

      // method to query the participations api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      var participation_query = function(){
        participation.query().then(function(participations){
          $scope.participations = participations;
        });
      }

      // when the user logs in, fetch the participations
      $rootScope.$on('auth:login-success', function(ev, user) {
        participation_query();
      });

      // when the user logs out, remove the participations
      $rootScope.$on('auth:logout-success', function(ev) {
        $scope.participations = null;
      });

      // will get a "401 Unauthorized" if the user is not authenticated
      participation_query();

    });

})();