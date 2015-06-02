/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcrypt');
module.exports = {

  main: function(req, res){
    res.view('homepage', {
      user:false,
      error:false
    });
  },

  login: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
   
    User.findOneByUsername(username, function(err, user){
      if(user){
        bcrypt.compare(password , user.password, function(err, match){
          if(match){

            req.session.user = user;
            res.view('homepage', {
              user: user
            });
          }

        });   

     }

    });
	
  
  },

  logout: function(req, res){
    req.session.user = null;
    res.view('homepage' , {
      user: false,
      error: false
    });
  }

};

