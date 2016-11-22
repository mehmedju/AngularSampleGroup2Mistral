angular.module('app')
    .controller('loginController', ['$scope', '$location', function ($scope, $location) {
        'use strict';

        var credentials = {
            username: "admin",
            password: "password"
        }

        $scope.signIn = function () {
            if ($scope.user.username === credentials.username && $scope.user.password === credentials.password) {
                $location.path('/home');
            } else {
                alert('Wrong credentials');
            }
        }
    }
    ]);