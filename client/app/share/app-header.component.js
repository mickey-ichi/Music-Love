;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('appHeader', {
            controllerAs: 'appHeader',
            controller  : AppHeader,
            templateUrl : 'app/share/app-header.html'
        });

    AppHeader.$inject = [];

    function AppHeader() {
        var appHeader = this;

    }
})(window.angular);