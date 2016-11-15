angular.module('app')
    .controller('rightPanelController', ['$scope', 'commonService', function ($scope, commonService) {
        'use strict';

        $scope.positions = commonService.getPositions();
        $scope.teams = commonService.getTeams();

        $scope.save = function (newParticipant) {
            $scope.allParticipants.push(newParticipant);
        }

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2080, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.openDatepicker = function () {
            $scope.datepicker.opened = true;
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.datepicker = {
            opened: false
        };

    }
    ]);
