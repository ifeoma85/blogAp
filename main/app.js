const express = require("express");
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const { connectToMongoDB } = require('./db');
const { cookieJwtAuth } = require("./middleware/cookieJwtAuth")

const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

require('dotenv').config()
connectToMongoDB()

require("./authentication/auth")

const PORT = 3000;
const app = express();
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', blogRoutes);
app.use('/', authRoutes);
app.use('/blog', passport.authenticate('jwt', {session: false}), blogRoutes);
app.use('/public', express.static("public"))

app.get('/', (req, res) => {
    res.render('index', { navs: ['signup', ]})
});
app.get('/', (req, res) => {
    res.render('signup', { navs: ['signup', 'login', 'blog'] });
});
app.get('/', (req, res) => {
    res.render('login', { navs: ['blog', 'logout'] });
});

app.get('/', (req, res) => {
    res.render('blog', {
        navs: ['signup', 'login', 'logout']
    });
});

app.post("/cookieJwtAuth")
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({error: err.message });
});
app.listen(PORT, () => {
    console.log(`Server started at port: http://localhost:${PORT}`)
});