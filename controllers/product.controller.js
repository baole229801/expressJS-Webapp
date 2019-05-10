var db = require('../db');
var md5 = require('md5');

module.exports.productShow = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = page * perPage;

    var product = db.get('products').value().slice(start, end);
    res.render('products/show', {
        products : product
    });
};

module.exports.productAdd = function(req, res) {

};