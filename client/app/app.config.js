(function (angular) {
    'use strict';

    angular.module('emPlusApp').config(Config);

    Config.$inject = ['$locationProvider'];

    function Config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})(angular);