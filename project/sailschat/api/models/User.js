/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true,
    }, 

    loggedIn: 'boolean'
,
  },

  beforeCreate: function(values, cb){
    bcrypt.hash(values.password , 8, function(err, hash){
      if(err){
        return cb(err);
      }
      values.password = hash;
      cb();
    });
  }
};

