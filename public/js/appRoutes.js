angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/jobs/:city', {
			templateUrl: 'views/jobs.html',
			controller: 'JobsController'
		})

		.when('/aboutus', {
			templateUrl: 'views/aboutus.html',
			controller: 'AddJobController'
		})

		.when('/job/:job_id', {
			templateUrl: 'views/job.html',
			controller: 'JobController'	
		})
		.when('/postajob', {
			templateUrl: 'views/post.html',
			controller: 'AddJobController'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

}]);