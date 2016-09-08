;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('newsFeed', {
            controller  : NewsFeedController,
            controllerAs: 'newsFeed',
            templateUrl : 'app/news-feed/news-feed.html'
        });

    NewsFeedController.$inject = ['$rootScope', 'Pubnub'];

    function NewsFeedController($rootScope, Pubnub) {
        var newsFeed = this;
        newsFeed.categories = [
            {
                name: 'Top',
                value: 1
            },
            {
                name: 'FUN',
                value: 2
            },
            {
                name: 'Love',
                value: 3
            }
        ];
        newsFeed.postNewsFeed = function () {
            Pubnub.publish({
                channel: 'hello_world',
                message : "Hello from PubNub Docs!",
                triggerEvents: true
            })
        };

        newsFeed.category = newsFeed.categories[0];
        newsFeed.chooseCategory = function (category) {
            newsFeed.category = category;
        };

        $rootScope.$on(Pubnub.getMessageEventNameFor('hello_world'), function (ngEvent, message, envelope, channelOrGroup, time, channel) {
            console.log(
                "Message Received." + "\n" +
                "Channel or Group: " + JSON.stringify(channelOrGroup) + "\n" +
                "Channel: " + JSON.stringify(channel) + "\n" +
                "Message: " + JSON.stringify(message)  + "\n" +
                "Time: " + time  + "\n" +
                "Raw Envelope: " + JSON.stringify(envelope)
            );
        });

        $rootScope.$on(Pubnub.getEventNameFor('subscribe', 'connect'), function () {
            Pubnub.publish({
                channel: 'hello_world',
                message : "Hello from PubNub Docs!",
                triggerEvents: true
            })
        });

        $rootScope.$on(Pubnub.getEventNameFor('publish', 'callback'), function (ngEvent, message) {
            console.log(message);
        });
    }
})(window.angular);