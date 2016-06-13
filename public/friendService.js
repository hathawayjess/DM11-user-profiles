angular.module('userProfiles')
.factory('friendService', function( $http ) {     //pass in $http
  return {
    
    login: function( user ) {
      /* FIX ME */
      return $http.post('/api/login', user)        //post method that will send the user object to the endpoint in server.js
    },                                             //user object is created by the ng-models on the input and sent from the controller

    getFriends: function() {
    	/* FIX ME */                                
    	return $http.get('/api/profiles')            //get method that corresponds to get endpoint in server.js
        .then(function(response) {                 //response is what is sent from the getFriends function in the backend profileCtrl.js
       	 return response.data;                     //in this case, it's a json object with currentUser and friends properties
      })
    }
  }
});