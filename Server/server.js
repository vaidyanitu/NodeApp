
var express= require('express');
var app=express();
var port=process.env.port ||3000;
var mongoose= require('mongoose');
var passport= require('passport');
var flash= require('connect-flash');
var path=require('path');

var morgan = require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser= require('body-parser');
var session= require('express-session');

var configDB= require('./config/database.js');
var user={};
//configuration===============================================
mongoose.connect(configDB.url,{ useNewUrlParser: true }); //connect to our database

require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser.urlencoded({
    extended:true
})); //get information from html forms
app.use(bodyParser.json());
app.set('view engine','ejs'); //set up ejs for templating

app.use(express.static(path.join(__dirname,'../client/dist')));
app.set('views',path.join(__dirname,'/views'));

//required for passport
app.use(session({
    secret:'ItsATopSecret',
    resave:true,
    saveUninitialized:true
})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use connect-flash for flash messages stored in session
const catRoutes= require('./app/categoryRoutes');
app.use('/category',isLoggedIn,catRoutes);

//routes ==================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//launch ====================================================================
app.listen(port);
console.log(' The magic happens on port '+ port);
console.log(__dirname);

function isLoggedIn(req, res,next){
    
    //if user is authenticated in the session, carry on
    if(req.isAuthenticated())
    {
        // this.user=req.user;
        res.locals.user=req.user;
        return next();
    }         
    //if they aren't redirect them to the home page
    res.redirect('/');
    }


    // app.use('/',function(req,res){
    //     res.sendfile(path.join(__dirname,'../client/dist/client/index.html'));
    // })