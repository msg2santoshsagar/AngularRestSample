(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('location', {
            parent: 'app',
            url: '/location',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/location/location.html',
                    controller: 'LocationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
