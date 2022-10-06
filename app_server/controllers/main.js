var express = require('express');
var router = express.Router();


//diğer js dosyalarında kullanıma açar (module.exports.index)
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

