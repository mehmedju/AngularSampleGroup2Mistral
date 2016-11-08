angular.module('app')
    .controller('homeController', ['$scope', function ($scope) {
        'use strict';

        $scope.selectedParticipant = {};
        $scope.allParticipants = [
            {
                id: 1,
                name: "Zinajda",
                surname: "Sarac",
                position: "QA",
                team: "ESecuritel",
                hireDate: new Date(2010, 9, 11)
            },
            {
                id: 2,
                name: "Enes",
                surname: "Kuhn",
                position: "QA",
                team: "ESecuritel",
                hireDate: new Date(2010, 6, 11)
            },
            {
                id: 3,
                name: "Ammar",
                surname: "Kevilj",
                position: "QA",
                team: "ESecuritel",
                hireDate: new Date(2013, 9, 18)
            },
            {
                id: 4,
                name: "Dzenan",
                surname: "Dizdarevic",
                position: "QA",
                team: "AT&T",
                hireDate: new Date(2011, 7, 21)
            }
        ];

        $scope.selectParticipant = function (participant) {
            $scope.selectedParticipant = participant;
        }
    }
    ]);