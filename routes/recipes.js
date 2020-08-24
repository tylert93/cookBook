import express from 'express';
import {Recipe} from '../models/recipe';
import {Comment} from '../models/comment';
import {isLoggedIn, checkCommentOwnership} from '../middleware/index';

const recipeRoutes = express.Router();

// INDEX
recipeRoutes.get("/recipes", (req, res) => {
    Recipe.find({}, (err, foundRecipes) => {
        if(err){
            req.flash("error", err);
            res.redirect("back");
        } else {
            res.render("recipes/index", {recipes:foundRecipes});
        }
    });
});

// CREATE
recipeRoutes.post("/recipes", isLoggedIn, (req, res) => {
    Recipe.create(req.body.recipe, (err, createdRecipe) => {
        if(err || !createdRecipe){
            req.flash("error", "Your recipe couldn't be created, please try again");
            res.redirect("back");
        } else {
            createdRecipe.author.id = req.user._id;
            createdRecipe.author.username = req.user.username;
            createdRecipe.save();
            req.flash("success", "Your recipe has been added");
            res.redirect("/recipes");
        }
    });
});

// NEW
recipeRoutes.get("/recipes/new", isLoggedIn, (req, res) => {
    res.render("recipes/new");
});

// SHOW
recipeRoutes.get("/recipes/:id", (req, res) => {
    Recipe.findById(req.params.id).populate("comments").exec((err, foundRecipe) => {
        if(err || !foundRecipe){
            req.flash("error", "We couldn't find the recipe you were looking for");
            res.redirect("back");
        } else {
            res.render("recipes/show", {recipe:foundRecipe});
        }
    });
});

// EDIT
recipeRoutes.get("/recipes/:id/edit", checkCommentOwnership, (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        if(err || !foundRecipe){
            req.flash("error", "We couldn't find the recipe you were looking for");
            res.redirect("back");
        } else {
            res.render("recipes/edit", {recipe:foundRecipe});
        }
    });
});

// UPDATE
recipeRoutes.put("/recipes/:id", checkCommentOwnership, (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, (err, updatedRecipe) => {
        if(err || !updatedRecipe){
            req.flash("Your recipe couldn't be updated, please try again");
            res.redirect("back");
        } else {
            req.flash("success", "Your recipe has been updated");
            res.redirect(`/recipes/${req.params.id}`)
        }
    });
});

// DELETE
recipeRoutes.delete("/recipes/:id", checkCommentOwnership, (req, res) => {
    Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
        if(err || !deletedRecipe){
            req.flash("error", "Your recipe couldn't be deleted, please try again");
            res. redirect("back");
        } else {
            Comment.deleteMany({_id: {$in:deletedRecipe} }, (err) => {
                if(err){
                    req.flash("error", err);
                    res.redirect("/recipes");
                } else {
                    req.flash("success", "Your recipe has been deleted");
                    res.redirect("/recipes");
                }
            });
        }
    });
});

export default recipeRoutes;