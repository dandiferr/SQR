// public/js/services/NerdService.js
angular.module('AddJobService', []).factory('jobFactory', ['$http', function($http) {

    var jobs = [];

    var jobFactory = {};

    jobFactory.updateJobs = function() {
        var promise = $http.get('/api/jobs').then(function(response) {
            jobs = response.data;
            console.log(jobs)
            return response.data;
        });
        return promise;
    }

    jobFactory.getJobs = function() {
        return jobs;
    }

    return jobFactory;

    /*return {
        get : function() {
            $http.get('/api/jobs')
                .success(function(data) {
                    jobs = data;
                    jobs = jobs.reverse();
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }

    }
    /*return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/jobs');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/jobs', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/jobs/' + id);
        }
    }       */

}]);