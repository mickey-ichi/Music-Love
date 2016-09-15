;(function (app) {
    "use strict";
    app.controller('NewsFeedController', NewsFeedController);

    NewsFeedController.$inject = ['$scope', 'newFeedService'];

    function NewsFeedController($scope, newFeedService) {
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
        };
    }
})(angular.module('emPlusApp'));