;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('newsFeed', {
            controllerAs: 'newsFeed',
            controller  : NewsFeedController,
            templateUrl : 'app/news-feed/news-feed.html'
        });

    NewsFeedController.$inject = [];

    function NewsFeedController() {
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
        newsFeed.category = newsFeed.categories[0];

    }
})(window.angular);