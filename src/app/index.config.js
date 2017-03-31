(function() {
  'use strict';

  angular
    .module('angularRails')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {

    // ...snip...

    // ng-token-auth config:
    $authProvider.configure({
      // note: the defaults are fine for now
      // @see: https://github.com/lynndylanhurley/ng-token-auth#complete-config-example
    });
  }

})();