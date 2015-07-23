angular.module('MainCtrl', []).controller('MainController', function($scope, $location) {

	$scope.go = function(path) {
		$location.path(path);
		$(".navbar-collapse").collapse('hide')
	};
})

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});