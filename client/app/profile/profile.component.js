;(function (app) {
    "use strict";
        app.component('profile', {
            controllerAs: 'profile',
            controller  : ProfileController,
            templateUrl : 'app/profile/profile.html'
        });

    ProfileController.$inject = ['Pubnub'];

    function ProfileController(Pubnub) {
        var profile = this;
    }
})(angular.module('emPlusApp'));