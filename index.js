const request = require("request");

const requestOptions = {
    json: true,
    headers: {
        'User-Agent': 'request'
    }
};

module.exports = {
    getData: function (login, callback) {
        request(`https://api.github.com/users/${login}`, requestOptions, (error, response, body) => callback(error, body));
    },
    getRepos: function (login, callback) {
        request(`https://api.github.com/users/${login}/repos`, requestOptions, (error, response, body) => callback(error, body));
    }
};
