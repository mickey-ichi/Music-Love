;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('appFooter', {
            controllerAs: 'appFooter',
            controller  : AppFooter,
            templateUrl : 'app/share/app-footer.html'
        });

    AppFooter.$inject = [];

    function AppFooter() {

    }
})(window.angular);