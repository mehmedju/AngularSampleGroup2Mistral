angular.module('app')
    .service('dataService', function ($http, $q) {

        this.get= function () {
            var deferred = $q.defer();
            $http.get('http://localhost:15706/angular-app/content/data.json').
                success(function (response, status) {
                    console.log('success', response, status);
                    deferred.resolve(response);
                }).error(function (err) {
                    console.error('error', err);
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    }
    );