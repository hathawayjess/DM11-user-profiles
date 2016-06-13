angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {  //inject the userInfo resolve

	$scope.currentUser = userInfo.currentUser;   //put currentUser that we got from userInfo resolve on $scope
	$scope.friends = userInfo.friends;           //put friends on $scope

});