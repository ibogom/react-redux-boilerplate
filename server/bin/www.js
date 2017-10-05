const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');
const socket = require('socket.io');

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || '3000';


const app = express();

app.set('port', PORT);

if(NODE_ENV === "development") {
    app.use(webpackDevMiddleWare(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    }));
}

app.use(webpackHotMiddleWare(compiler));


// app.use(favicon(path.join(__dirname, '../../static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../static')));

const server = app.listen(app.get('port'), (err) => {
    if(err){
        return console.error(err);
    }
    console.log('Node server started from ' + path.join(__dirname, '../../static') + ' on http://localhost' + app.get('port'));
});

const io = socket.listen(server);
