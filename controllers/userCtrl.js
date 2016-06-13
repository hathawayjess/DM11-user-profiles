var users = [                                       //this array of objects is simulating a database
  {                                                 //normally we wouldn't have user information in a controller file
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
                                                  //a module encapsulates related code into a single unit
                                                  //in server.js, we imported modules using require()
module.exports = {                                //here we export a module using the module.exports object

  login: function(req, res, next) {               //req = request, res = response, next = passes control to the next middleware function
    var userFound = false;                        //default value of userFound - if user not found, it will remain false
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.body.userName && users[i].password === req.body.password) { //if userName and password sent in req.body match any
          req.session.currentUser = users[i];                                               //in our data, then set currentUser to that object
          userFound = true;                                                                 //req.session comes from the sessions module we required in our server
       }
      }

      if(userFound){                              //if statement that will verify if a user was found or not
        res.send({ userFound: true });            
      } else {
        res.send({userFound: false});
      }
  }

}