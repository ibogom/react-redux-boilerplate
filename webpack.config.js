var debug = process.env.NODE_ENV !== "production";

var devConfig = require('./configs/dev.config.js');
var prodConfig = require('./configs/prod.config.js');

module.exports =  debug ? devConfig : prodConfig;