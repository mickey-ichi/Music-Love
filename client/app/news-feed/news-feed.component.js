;(function (app) {
    "use strict";
        app.component('newsFeed', {
            controller  : NewsFeedController,
            controllerAs: 'newsFeed',
            templateUrl : 'app/news-feed/news-feed.html'
        });

    NewsFeedController.$inject = ['Pubnub', '$scope', 'newFeedService'];

    function NewsFeedController(Pubnub, $scope, newFeedService) {
        var newsFeed = this;
        newsFeed.message = '';
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
        newsFeed.listNewsFeed = [];

        newsFeed.listNewsFeed = newFeedService.getNewFeed();

        newsFeed.category = newsFeed.categories[0];
        newsFeed.chooseCategory = function (category) {
            newsFeed.category = category;
        };

        newsFeed.postNewsFeed = function () {
            Pubnub.publish({
                channel: 'news_feed',
                message : {
                    user: {
                        avatar: '../assets/images/a2.jpg',
                        name: 'Peter Joo',
                        id: 1
                    },
                    content: newsFeed.message,
                    postTimeAt: 'Now',
                    postImages: [],
                    replies: []
                },
                triggerEvents: true
            })
        };

        Pubnub.subscribe({
            channel: 'news_feed',
            triggerEvents: ['message', 'connect'],
            callback: function (post) {
                newsFeed.listNewsFeed.splice(0, 0, post);
                $scope.$apply();
            }
        });
    }
})(angular.module('emPlusApp'));