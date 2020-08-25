import dotEnv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import passport from 'passport';
import localStrategy from 'passport-local';
import expressSession from 'express-session';
import flash from 'connect-flash';
import moment from 'moment';
import {User} from './models/user';
import indexRoutes from './routes/index';
import recipeRoutes from './routes/recipes';
import commentRoutes from './routes/comments';

const app = express();

// APP CONFIGURATION      
dotEnv.config();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free"));
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = moment;

// SETUP MONGODB
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify:false 
})
.then(() => {
    console.log("connected to database ...");
})
.catch(() => {
    console.log("couldn't connect to database");
});

// PASSPORT CONFIGURATION
app.use(expressSession({
    secret:"november juliet tango",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// SETUP LOCALS
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// SETUP ROUTES
app.use(recipeRoutes);
app.use(commentRoutes);
app.use(indexRoutes);

// CONNECT TO PORT
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("server is running ...")
});