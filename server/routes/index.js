const home = require('./home.js');

module.exports = function (app) {
    app.get('/', home.page);
    app.get('*', home.page);
};
