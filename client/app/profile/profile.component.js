;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('profile', {
            controllerAs: 'profile',
            controller  : ProfileController,
            templateUrl : 'app/profile/profile.html'
        });

    ProfileController.$inject = ['Pubnub'];

    function ProfileController(Pubnub) {
        var profile = this;
    }
})(window.angular);