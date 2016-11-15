angular.module('app')
    .factory('commonService', function ($http, $q) {

        function getPositions() {
            var positions = ['QA', 'PM', 'Developer', 'UX/UI'];
            return positions;
        }

        function getTeams() {
            var teams = ['LTV', 'NCR', 'ESecuritel'];
            return teams;
        }

        return {
            getPositions: getPositions,
            getTeams: getTeams
        }
    }
    );