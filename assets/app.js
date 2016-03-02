var myApp = angular.module('sortableContainerApp', ['ui.sortable']);

myApp.controller('sortableController', function($scope) {
    var tmpList = [];
    
    $scope.rawItems = [
        [{
            title: 'Google',
            link: 'https://google.com'
        },
        {
            title: "YouTube",
            link: "https://www.youtube.com"
        },
        {
            title: "Twitter",
            link: "https://www.twitter.com"
        },
        {
            title: "Facebook",
            link: "https://facebook.com"
        },
        {
            title: "Google+",
            link: "https://plus.google.com"
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/"
        }],
        [{
            title: 'Google (b)',
            link: 'https://google.com'
        },
        {
            title: "YouTube (b)",
            link: "https://www.youtube.com"
        },
        {
            title: "Twitter (b)",
            link: "https://www.twitter.com"
        },
        {
            title: "Facebook (b)",
            link: "https://facebook.com"
        },
        {
            title: "Google+ (b)",
            link: "https://plus.google.com"
        },
        {
            title: "Instagram (b)",
            link: "https://www.instagram.com/"
        }
            
        ]
    ];
    
    $scope.sortingLog = [];
    
    function createOptions (listName) {
        var _listName = listName;
        var options = {
            placeholder: "app",
            connectWith: ".list-container",
            activate: function() {
                console.log("list " + _listName + ": active");
            },
            beforeStop: function() {
                console.log("list " + _listName + ": beforeStop");
            },
            change: function() {
                console.log("list "  + _listName + ": change");
            },
            create: function() {
                console.log("list " + _listName + ": create");
            },
            deactive: function() {
                console.log("list " + _listName + ": deactivate");
            },
            out: function() {
                console.log("list " + _listName + ": out");
            },
            over: function() {
                console.log("list " + _listName + ": over");
            },
            receive: function() {
                console.log("list " + _listName + ": receive");
            },
            remove: function() {
                console.log("list " + _listName + ": remove");
            },
            sort: function() {
                console.log("list " + _listName + ": sort");
            },
            start: function() {
                console.log("list " + _listName + ": start");
            },
            stop: function() {
                console.log("list " + _listName + ": stop");
            },
            update: function() {
                console.log("list " + _listName + ": update");
            }
        };
        return options;
    }
    
    $scope.sortableOptionsList = [createOptions('A'), createOptions('B')];
});
