var AuthCustom = function () {

};

AuthCustom.prototype.auth = function () {
    return AuthService.auth();
};

module.exports = AuthCustom;
