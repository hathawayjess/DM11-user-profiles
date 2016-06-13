angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {                      //resolve will make sure that the promises below will resolve before view loads
			userInfo: function( friendService ) {
				/* FIX ME */
				return friendService.getFriends();  //invoke getFriends in friendService
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});