;(function (app) {
    "use strict";
        app.controller('ProfileController', ProfileController);

    ProfileController.$inject = ['Pubnub'];

    function ProfileController(Pubnub) {
        var profile = this;
    }
})(angular.module('emPlusApp'));