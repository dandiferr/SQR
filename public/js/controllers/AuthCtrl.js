angular.module('AuthCtrl', ['qrScanner']).controller('AuthController', function($scope, $http, $location) {

	$scope.onSuccess = function(data) {
        $location.path('job/' + data);
    };
    $scope.onError = function(error) {
        console.log(error);
    };
    $scope.onVideoError = function(error) {
        console.log(error);
    };
})
