'use strict';
// Modules
var path = require('path');

var config = {

    site_title: 'qik-docs',

    base_url: '',
    theme_dir  : path.join(__dirname, 'themes'),
    theme_name : 'default',

    content_dir : path.join(__dirname, 'content'),
    
    public_dir  : path.join(__dirname, 'themes', 'default', 'public'),
    image_url: '/images',

};
config.public_dir = path.join(__dirname, 'themes', config.theme_name, 'public');


// Exports
module.exports = config;