import express from 'express';
import {User} from '../models/user';
import passport from 'passport';
import { isLoggedIn } from '../middleware';
const indexRoutes = express.Router();

// LANDING
indexRoutes.get("/", (req, res) => {
    res.render("index");
});

// REGISTER
indexRoutes.get("/register", (req, res) => {
    res.render("register");
});

indexRoutes.post("/register", (req, res) => {
    if(req.body.password === req.body.passwordConfirm){
        const newUser = new User({username:req.body.username});
        User.register(newUser, req.body.password, (err, user) => {
            if(err || !user){
                req.flash("error", err);
                res.redirect("/register");
            }
            passport.authenticate("local")(req, res, () => {
                req.flash("success", `Your account has been created, welcome ${req.user.username}`);
                res.redirect("/recipes");
            });
        });
    } else {
        req.flash("error", "Your passwords didn't match");
        res.redirect("back");
    }
   
    
});

// LOGIN
indexRoutes.get("/login", (req, res) => {
    res.render("login");
});

indexRoutes.post("/login", passport.authenticate("local",
    {
        successRedirect:"/login-success",
        failureRedirect:"/login",
        failureFlash:true
    }), (req, res) => {
});

indexRoutes.get("/login-success", isLoggedIn, (req, res) => {
    req.flash("success", `You've logged in, welcome back ${req.user.username}`);
    res.redirect("/recipes");
})

// LOGOUT
indexRoutes.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "You have logged out");
    res.redirect("/recipes");
});

// CATCH ALL
indexRoutes.get("*", (req, res) => {
    req.flash("error", "We couldn't find the page you were after");
    res.redirect("/recipes");
})

export default indexRoutes;