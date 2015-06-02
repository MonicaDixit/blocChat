/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  attributes: {

  },

  beforeCreate: function(values, next){
    if(req.session.user){
      values.username = req.session.user.username;
      next();
    }

    else{
      next('Must be logged in');
    }
  }
	
};

