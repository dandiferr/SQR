angular.module('JobService', []).factory('Job', ['$http', function($http) {

	var jobData = [];

	$http.get('/api/jobs')
		.success(function(data) {
			$scope.jobs = data;
			$scope.jobs = $scope.jobs.reverse();
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);