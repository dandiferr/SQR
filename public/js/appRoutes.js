angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'	
		})

		.when('/job', {
			templateUrl: 'views/qr.html',
			controller: 'AuthController'	
		})

		.when('/job/:job_id', {
			templateUrl: 'views/job.html',
			controller: 'JobController'	
		})
		.when('/login', {
			templateUrl: 'views/post.html',
			controller: 'AddJobController'
		})
		.when('/qrcode', {
			templateUrl: 'views/qrcode.html',
			controller: 'QRController'
		})
		.otherwise({
			redirectTo: '/home'
		});

	$locationProvider.html5Mode(true);

}]);