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
        Pubnub.subscribe({
            channel: 'hello_world',
            triggerEvents: ['message', 'connect'],
            callback: function (message) {
                console.log(message);
            }
        })
    }
})(window.angular);