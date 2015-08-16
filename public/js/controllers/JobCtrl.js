angular.module('JobCtrl', []).controller('JobController', function($scope, $routeParams, $http) {


	job_id = $routeParams.job_id;

	$http.get('/api/user/' + job_id)
		.success(function(data) {
			$scope.user = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});