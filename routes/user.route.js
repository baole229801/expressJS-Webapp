var express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
//var authMiddleware = require('../middleware/auth.middleware.js');

var router = express.Router();

router.get('/', controller.index);

// router.get('/cookie', function(req, res, next) {
//     res.cookie('user-id', 16071);
//     res.send('Hello');
// });

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;