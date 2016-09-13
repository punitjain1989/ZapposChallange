	// create the module and name it scotchApp
	var llamaApp = angular.module('llamaApp', ['ngRoute']);

	// configure our routes
	llamaApp.config(function($routeProvider) {
		$routeProvider

			// route for the types page
			.when('/types', {
				templateUrl : 'pages/types.html',
				controller  : 'typesController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the technology page
			.when('/technology', {
				templateUrl : 'pages/technologies.html',
				controller  : 'technologyController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the facts page
			.when('/facts', {
				templateUrl : 'pages/facts.html',
				controller  : 'factsController'
			});
	});

	// create the controller and inject Angular's $scope
	llamaApp.controller('mainController', function($scope) {
	});

	llamaApp.controller('typesController', function($scope) {
	});

	llamaApp.controller('factsController', function($scope) {
	});

	llamaApp.controller('contactController', function($scope) {
	});

	llamaApp.controller('aboutController', function($scope) {
	});

	llamaApp.controller('technologyController', function($scope) {
	});
