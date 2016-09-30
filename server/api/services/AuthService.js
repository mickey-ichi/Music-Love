module.exports = {
    auth: auth
};

function auth() {
    return Auth.find();
}
