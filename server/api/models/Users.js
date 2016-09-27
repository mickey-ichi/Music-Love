/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type    : 'email',
      required: true,
      unique  : true
    },
    password: {
      type     : 'string',
      minLength: 6,
      required : true
    },
    toJson  : function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;

    }
  }
};

