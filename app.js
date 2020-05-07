'use strict';

var debug = require('debug')('raneto');
var raneto = require('raneto');
var config = require('./config.js');
var app = raneto(config);

// Load the HTTP Server
var server = app.listen(app.get('port'), function () {
  debug('Express HTTP server listening on port ' + server.address().port);
});

module.exports = app;
