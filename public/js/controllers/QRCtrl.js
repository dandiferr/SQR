angular.module('QRCtrl', ['ja.qr']).controller('QRController', function($scope, $routeParams, $http, Auth, $location) {

	$scope.string = '';

	Auth.$onAuth(function(authData) {
	    $scope.authData = authData;
	    console.log(authData);

	    if ($scope.authData) {
	    	$scope.string = $scope.authData.uid;
	    }
	    else {
	    	$location.path('/home');
	    }
  	});

});