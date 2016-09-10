;(function (app) {
    "use strict";

    app.service('newFeedService', NewFeedService);
    NewFeedService.$inject = ['$http'];

    function NewFeedService ($http) {
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
                    postImage: [],
                    postTimeAt: '2 minutes ago',
                    replies: [
                        {
                            user: {
                                avatar: '../assets/images/a2.jpg',
                                name  : 'Peter Joo',
                                id    : 2
                            },
                            content: 'Jessi assign you a task Mockup Design.',
                            repliesAt: 'Sun, 11 Feb'
                        },
                        {
                            user: {
                                avatar: '../assets/images/a5.jpg',
                                name  : 'Peter Joo',
                                id    : 3
                            },
                            content: 'Jessi assign you a task Mockup Design.',
                            repliesTimeAt: 'Sun, 11 Feb'
                        }
                    ]
                },
                {
                    user: {
                        avatar: '../assets/images/a0.jpg',
                        name: 'Moke',
                        id: 4
                    },
                    content: 'Just followed Jacob and she followed you too.',
                    postImage: ['../assets/images/b2.jpg'],
                    postTimeAt: '8:30',
                    replies: []
                }
            ]
        };
    }

})(angular.module('emPlusApp'));