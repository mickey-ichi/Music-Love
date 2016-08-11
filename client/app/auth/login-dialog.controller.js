;(function (angular) {
    "use strict";

    angular.module('emPlusApp').controller('LoginDialogController', LoginDialogController);

    LoginDialogController.$inject = ['$mdDialog'];

    function LoginDialogController($mdDialog) {
        var loginDialog = this;

        loginDialog.hide = function() {
            $mdDialog.hide();
        };

        loginDialog.cancel = function() {
            $mdDialog.cancel();
        };

    }

})(window.angular);