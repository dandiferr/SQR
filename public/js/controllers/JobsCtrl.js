angular.module('JobsCtrl', ['infinite-scroll', 'AddJobService','angular-loading-bar']).controller('JobsController', function($scope, $http, jobFactory) {

	/*$http.get('/api/jobs')
		.success(function(data) {
			$scope.jobs = data;
			$scope.jobs = $scope.jobs.reverse();
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});*/
	//$scope.jobs = jobFactory.getJobs()

	jobFactory.updateJobs().then(function(d) {
		$scope.jobs = d.reverse();
	}). catch(function(data) {
		console.log('Error: ' + data);
	});



	//$scope.jobs.push({title: 'Software Engineer Intern', company: 'Google', date: 'July 3', location: 'San Francisco',category: ['design','front-end']});
	//$scope.jobs.push({_id: "55a204ae8682033d5498f195", title: "Software Engineer Intern", company: "Crowdflower", __v: 0});


	/*$scope.createJob = function() {
		$http.post('/api/jobs', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.jobs = data.reverse();
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};*/

	$scope.deleteJob = function(id) {
		console.log(id)
		$http.delete('/api/jobs/' + id)
			.success(function(data) {
				$scope.jobs = data;
				$scope.jobs = $scope.jobs.reverse();
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.loadMore = function() {
		$scope.isData = true;
	}

	$scope.addToArray = function() {
		$scope.jobs.push({title: "SDFSDFSD", company: "asdfasdf"})
	}
})
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
  }])