angular.module('JobCtrl', []).controller('JobController', function($scope, $routeParams, $http) {

	$scope.tagline = 'The square root of life is pi!';

	job_id = $routeParams.job_id;

	$http.get('/api/jobs/' + job_id)
		.success(function(data) {
			$scope.job = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});