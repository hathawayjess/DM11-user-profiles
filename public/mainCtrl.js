angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user)                //invoke friendService.login with the user object (created with ng-models on home.html)
			.then(function( response ) {         //this will return an object with a userFound property (see userCtrl on backend)
				if (response.data.userFound) {   //if userFound is true
					$location.path('/profile');  //$location parses the URL in the browser address bar, path will change the path in the URL
				} else {
					alert('User not found');     //will alert if userFound is false
				}
		});
	}

});