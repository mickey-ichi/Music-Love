(function (angular) {
    'use strict';
    var app = angular.module('emPlusApp');
    app.config(Config);

    Config.$inject = ['$locationProvider'];

    function Config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    app.run(InitPubnub);

    InitPubnub.$inject = ['Pubnub'];
    function InitPubnub(Pubnub) {
        Pubnub.init({
            publish_key: 'pub-c-17104319-99d3-4b1e-a261-53382ec28f67',
            subscribe_key: 'sub-c-23f9e856-742e-11e6-b9ce-02ee2ddab7fe'
        })
    }
})(angular);