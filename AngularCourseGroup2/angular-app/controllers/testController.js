angular.module('app')
    .controller('testController', ['$scope', function ($scope) {
        'use strict';
            $scope.testMessage = 'Hello world!';
        }
    ]);