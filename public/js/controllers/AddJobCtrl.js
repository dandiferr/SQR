angular.module('AddJobCtrl', ['angularPayments'])
.controller('AddJobController', function($scope, $http, $location) {
	$scope.formData = {};

	function createJob() {
		$http.post('/api/jobs', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				console.log(data);
				$location.path('jobs');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.showCompany = false;
	$scope.showPayment = false;


	$scope.formData.joburl = "http://"
	$scope.formData.companyurl = "http://"


	$scope.showCompanyButton = function() {
		if($scope.checkoutForm.jobTitle.$valid &&
			$scope.checkoutForm.jobUrl.$valid &&
			$scope.checkoutForm.jobDescription.$valid)
			$scope.showCompany = true;
	}

	$scope.showPaymentButton = function() {
		if($scope.checkoutForm.companyName.$valid &&
			$scope.checkoutForm.companyUrl.$valid &&
			$scope.checkoutForm.companyDescription.$valid)
			$scope.showPayment = true;
	}


	$scope.formData.category = "frontend";
	$scope.formData.baylocation = "eastbay";

	$scope.price = "$100";

	$scope.stripeCallback = function (code, result) {
		if (result.error) {
		    console.log(result.error);
		} else {
		    console.log(result);
		    var form = {stripeToken: result.id}
		    $http.post('/charge/postajob', form)
		    	.success(function(data) {
		    		console.log(data);
		    		createJob();
		    	})
		    	.error(function(data) {
		    		console.log("error " + data);
		    	})
		}
	};


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