var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];


//At this point, if a user is logged in, the session object will look something like this:
// { name: 'Preston McNeil',
//   password: 'password1',
//   friends: [ 'Lindsey Mayer', 'Terri Ruff' ] } }


module.exports = {

  getFriends: function(req, res, next) {
    var currUser = req.session.currentUser;               //sets session's currentUser to a shorter variable
    var userProfiles = [];                                

    for (var i = 0; i < currUser.friends.length; i++) {   //loop through currentUser's friends array
      for (var j = 0; j < profiles.length; j++) {         //loop through profiles array above
        if (currUser.friends[i] === profiles[j].name) {   //if there's a friend in currentUser's friends that matches one in the profiles,
          userProfiles.push(profiles[j]);                 //push to the empty userProfiles array
        } 
      }
    }


    res.json({                                             //send JSON object with the currentUser
      currentUser: currUser,                               //and the currentUser's friend information
      friends: userProfiles                                //back to the front end to display on the view
    })
  }

}