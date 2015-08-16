angular.module('AddJobCtrl', ['ja.qr'])

.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://socialqr.firebaseio.com");
  return $firebaseAuth(ref);
})

.controller('AddJobController', function($scope, $http, Auth, $location, $routeParams) {

	$scope.user = '';

	$scope.string = '';

	Auth.$onAuth(function(authData) {
	    $scope.authData = authData;

	    if ($scope.authData) {
	    	$scope.formData.fb_token = $scope.authData.uid;
	    	$scope.string = $scope.authData.uid;
	    	$scope.formData.name = $scope.authData.facebook.displayName;
	    	findUser($scope.authData);
	    }
  	});

	$scope.formData = {};

	function findUser(authData) {
		$http.get('/api/user/' + $scope.authData.uid)
			.success(function(data) {
				$scope.user = data;
				console.log($scope.user)
				if(!$scope.user) createJob();
				else {
					$scope.formData.facebook = data.facebook;
					$scope.formData.twitter = data.twitter;
					$scope.formData.linkedin = data.linkedin;
					$scope.formData.instagram = data.instagram;
	                $scope.formData.pinterest= data.pinterest;
	                $scope.formData.snapchat= data.snapchat;
	                $scope.formData.whatsapp= data.whatsapp;
	                $scope.formData.youtube= data.youtube;
	                $scope.formData.reddit= data.reddit;
				}
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}

	function createJob() {
		$http.post('/api/jobs', $scope.formData)
			.success(function(data) {
				console.log(data);
				//$location.path('jobs');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.editUser = function() {
		$http.post('/api/users', $scope.formData)
			.success(function(data) {
				console.log(data);
				//$location.path('jobs');
				alert("Saved!");
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}


	/*$scope.deleteJob = function(id) {
		$http.delete('/api/jobs/' + id)
			.success(function(data) {
				$scope.jobs = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};*/

});