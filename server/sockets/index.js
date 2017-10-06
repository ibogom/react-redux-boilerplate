const initialResponse = require('./initial.js');

module.exports = function (io) {

    io.use(function (socket, next) {
        if (socket.request.headers.cookie) return next();
        next(new Error('Authentication error'));
    });

    io.on('connection', (socket) => {
        socket.on('initial:request', initialResponse.bind(socket));
    });
};
