angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Auth) {

	$scope.go = function(path) {
		$location.path(path);
	};

	$scope.logout = function() {
	    Auth.$unauth();
	    $location.path('/home');
  	};

  	$scope.login = function() {
	    Auth.$authWithOAuthPopup("facebook")
	    .then(function(data) {
	    	$location.path('/login');
	    })
	    .catch(function(error) {
			console.error("Error authenticating with GitHub:", error);
	    });
	};

	Auth.$onAuth(function(authData) {
	    $scope.authData = authData;
  	});
})