var sideViewDemo = angular.module("sideViewDemo", ['ui.router']);
sideViewDemo.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise("/");
    	$stateProvider        
        .state("session1", {
        	url: "/session1",
        	templateUrl: "templates/session1.html",
        	controller: "session1Controller"
        })
        .state("session2", {
        	url: "/session2",
        	templateUrl: "templates/session2.html",
        	controller: "session2Controller"
        })
        .state("session3", {
        	url: "/session3",
        	templateUrl: "templates/session3.html",
        	controller: "session3Controller"
        });
    }
]);