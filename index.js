require('dotenv').config();
//console.log(process.env.SESSION_SECRET);

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

var port = 3000;
var userRoute = require('./routes/user.route.js');
var authRoute = require('./routes/auth.route.js');
var authMiddleware = require('./middleware/auth.middleware.js');
var productRoute = require('./routes/product.route');

var bodyParser = require('body-parser');

app.use(cookieParser('abcdef'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function (request, response) {
    // response.send('Hello, CoderTokyo');
    // response.send('<h1>Hello, CoderTokyo</h1>');
    response.render('index', {
        name: 'Bao',
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});