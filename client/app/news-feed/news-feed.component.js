;(function (app) {
    "use strict";
    app.component('newsFeed', {
        templateUrl: './app/news-feed/news-feed.html',
        controller : NewsFeed,
        controllerAs: 'newsFeed'
    });

    NewsFeed.$inject = ['$scope', 'newFeedService'];

    function NewsFeed($scope, newFeedService) {
        var newsFeed = this;
        newsFeed.listNewsFeed = [];

        newsFeed.listNewsFeed = newFeedService.getNewFeed();

    }
})(angular.module('app'));