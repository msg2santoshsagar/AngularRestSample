(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('thumbnailGeneratorTest', {
            parent: 'app',
            url: '/thumbnailGeneratorTest',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/thumbnail_generator/thumbnail_generator_test.html',
                    controller: 'ThumbnailGeneratorTestController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
