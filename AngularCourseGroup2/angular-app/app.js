var app = angular.module('app', ['ngRoute']);

app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'angular-app/js/login/login.html',
                controller: 'loginController'
            }).
            when('/home', {
                templateUrl: 'angular-app/js/home/home.html',
                controller: 'homeController'
            }).
            otherwise({ redirectTo: '/login' });
    }
]);