angular.module('patentApp').config(function ($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.when('','/login');
    $urlRouterProvider.when('/home','/home/search-result');
    $urlRouterProvider.when('/home/search-result','/home/search-result/list');
    $urlRouterProvider.when('/home/patent-detail','/home/patent-detail/basic-info');

    $stateProvider
    .state('login',{
        url: '/login',
        templateUrl: '/tpl/login.html',
        controller: 'loginCtrl'
    })
    .state('home',{
        url: '/home',
        templateUrl: '/tpl/home.html',
        controller: 'homeCtrl'
    })
    .state('home.search-result',{
        url: '/search-result',
        templateUrl: 'tpl/home-result.html',
        controller: 'contentCtrl'
    })
        .state('home.search-result.list',{
            url: '/list',
            templateUrl: 'tpl/home-result-list.html',
            controller: 'patentListCtrl'
        })
        .state('home.search-result.statistic',{
            url: '/statistic',
            templateUrl: 'tpl/home-result-statistic.html',
            controller: 'chartCtrl'
        })
    .state('home.patent-detail',{
        url: '/patent-detail',
        templateUrl: 'tpl/home-detail.html',
        controller: ''
    })
        .state('home.patent-detail.basic-info',{
            url: '/basic-info',
            templateUrl: 'tpl/home-detail-basic.html',
            controller: ''
        })
        .state('home.patent-detail.category-info',{
            url: '/category-info',
            templateUrl: 'tpl/home-detail-category.html',
            controller: ''
        })
        .state('home.patent-detail.patent-citation',{
            url: '/patent-citation',
            templateUrl: 'tpl/home-detail-citation.html',
            controller: ''
        })
        .state('home.patent-detail.lawyer-info',{
            url: '/lawyer-info',
            templateUrl: 'tpl/home-detail-lawyer.html',
            controller: ''
        })
        .state('home.patent-detail.right-require',{
            url: '/right-require',
            templateUrl: 'tpl/home-detail-right.html',
            controller: ''
        })
        .state('home.patent-detail.assignment-info',{
            url: '/assignment-info',
            templateUrl: 'tpl/home-detail-assignment.html',
            controller: ''
        })
        .state('home.patent-detail.inventor-point',{
            url: '/inventor-point',
            templateUrl: 'tpl/home-detail-inventor.html',
            controller: ''
        })
        .state('home.patent-detail.patent-article',{
            url: '/patent-article',
            templateUrl: 'tpl/home-detail-article.html',
            controller: ''
        })

});

angular.module('patentApp').run(function ($rootScope) {
    $rootScope.currentUserName = localStorage.currentUser;
    $rootScope.showLoadingBar = true;
});