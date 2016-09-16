;(function (app) {
    "use strict";

    app.service('newFeedService', NewFeedService);

    NewFeedService.$inject = ['$http', 'APP_API'];

    function NewFeedService ($http, APP_API) {
        var newFeedService = this;

        newFeedService.getNewFeed = function () {
            // return $http.get('', {
            //     params: {}
            // })
            return [
                {
                    user: {
                        avatar: '../assets/images/a0.jpg',
                        name: 'Peter Joo',
                        id: 1
                    },
                    content: 'Consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum',
                    postImages: [],
                    postTimeAt: '2 minutes ago',
                    replies: [
                        {
                            user: {
                                avatar: '../assets/images/a2.jpg',
                                name  : 'Peter Joo',
                                id    : 2
                            },
                            content: 'Jessi assign you a task Mockup Design.',
                            replyImages: ['../assets/images/b2.jpg'],
                            replyTimeAt: 'Sun, 11 Feb'
                        },
                        {
                            user: {
                                avatar: '../assets/images/a5.jpg',
                                name  : 'Peter Joo',
                                id    : 3
                            },
                            replyImages: [],
                            content: 'Jessi assign you a task Mockup Design.',
                            replyTimeAt: 'Sun, 11 Feb'
                        }
                    ]
                },
                {
                    user: {
                        avatar: '../assets/images/a2.jpg',
                        name: 'Moke',
                        id: 4
                    },
                    content: 'Just followed Jacob and she followed you too.',
                    postImages: ['../assets/images/b2.jpg'],
                    postTimeAt: '8:30',
                    replies: []
                }
            ]
        };
    }

})(angular.module('app'));