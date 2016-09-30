module.exports = {
    auth: auth
};

function auth() {
    console.log('1');
    Auth.find().then(function (data) {
        console.log(data);
    })
}
