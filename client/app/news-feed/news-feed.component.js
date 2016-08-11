;(function (angular) {
    "use strict";

    angular.module('emPlusApp')
        .component('newsFeed', {
            controllerAs: 'newsFeed',
            controller  : NewsFeedController,
            templateUrl : 'app/news-feed/news-feed.html'
        });

    NewsFeedController.$inject = ['$mdDialog'];

    function NewsFeedController($mdDialog) {
        var newsFeedController = this;
    }
})(window.angular);