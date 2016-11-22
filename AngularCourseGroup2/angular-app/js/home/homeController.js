angular.module('app')
    .controller('homeController', ['$scope', 'dataService', function ($scope, dataService) {
        'use strict';

        $scope.selectedParticipant = {};

        $scope.selectParticipant = function (participant) {
            $scope.selectedParticipant = participant;
        }

        dataService.get().then(function (responseData) {
            $scope.allParticipants = responseData;
        });

    }
    ]);