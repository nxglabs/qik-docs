'use strict';
// Modules
var path = require('path');

var config = {

    site_title: 'qik-docs',
    category_sort: false,
    base_url: '',
    theme_dir  : path.join(__dirname, 'themes'),
    theme_name : 'default',

    content_dir : path.join(__dirname, 'content'),
    
    public_dir  : path.join(__dirname, 'themes', 'default', 'public'),
    image_url: '/images',

    // allow_editing : true,
    // authentication : true,
    // authentication_for_edit: true,
    // authentication_for_read: true,

    // googleoauth: false,
    // oauth2 : {
    //     client_id: 'GOOGLE_CLIENT_ID',
    //     client_secret: 'GOOGLE_CLIENT_SECRET',
    //     callback: 'http://localhost:3000/auth/google/callback',
    //     hostedDomain: 'google.com'
    // },
    // secret: 'someCoolSecretRightHere',

    // credentials    : [
    //     {
    //     username : 'admin',
    //     password : 'password'
    //     },
    //     {
    //     username : 'admin2',
    //     password : 'password'
    //     }
    // ],

    table_of_contents: true,
};
config.public_dir = path.join(__dirname, 'themes', config.theme_name, 'public');


// Exports
module.exports = config;