/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var AuthCustom = require('./../app/auth/auth');

module.exports = {

    _config: {
        actions  : false,
        shortcuts: false,
        rest     : false
    },

    /**
     * `AuthController.login()`
     */
    login: function (req, res) {
        var authCustom = new AuthCustom();
        authCustom.auth().then(function (result) {
            return res.json({
                todo: result
            });
        });
    },


    /**
     * `AuthController.logout()`
     */
    logout: function (req, res) {
        return res.json({
            todo: 'logout() is not implemented yet!'
        });
    },


    /**
     * `AuthController.facebook()`
     */
    facebook: function (req, res) {
        Auth.create({email: 'dat', password: '123123'}).then(function (result) {
            return res.json({
                todo: result
            });
        });
    },


    /**
     * `AuthController.twitter()`
     */
    twitter: function (req, res) {
        return res.json({
            todo: 'twitter() is not implemented yet!'
        });
    },


    /**
     * `AuthController.google()`
     */
    google: function (req, res) {
        return res.json({
            todo: 'google() is not implemented yet!'
        });
    }
};

