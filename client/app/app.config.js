(function (angular) {
    'use strict';

    angular.module('emPlusApp').config(ConfigTheme);

    ConfigTheme.$inject = ['$mdThemingProvider'];

    function ConfigTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('pink');

        var loveOptions = {
            '500'                 : '#8BC34A',
            'contrastDefaultColor': 'black'
        };
        var themeLove   = $mdThemingProvider.extendPalette('light-green', loveOptions);
        $mdThemingProvider.definePalette('dashboardColor', themeLove);
        $mdThemingProvider.theme('themeLove').primaryPalette('dashboardColor');

    }

})(angular);