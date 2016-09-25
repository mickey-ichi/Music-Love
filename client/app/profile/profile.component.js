;(function (app) {
    "use strict";
    app.component('profile', {
        templateUrl: './app/profile/profile.html',
        controller: Profile,
        controllerAs: 'profile'
    });

    Profile.$inject = [];

    function Profile() {
        var profile = this;
    }
})(angular.module('app'));