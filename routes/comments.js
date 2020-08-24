import express from 'express';
import {Recipe} from '../models/recipe';
import {Comment} from '../models/comment';
import {isLoggedIn, checkCommentOwnership} from '../middleware/index';

const commentRoutes = express.Router();

// NEW
commentRoutes.get("/recipes/:id/comments/new", isLoggedIn, (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        if(err || !foundRecipe){
            req.flash("error", "We couldn't find the recipe you were after");
            res.redirect("back");
        } else {
            res.render("comments/new", {recipe:foundRecipe});
        }
    });
});

// CREATE
commentRoutes.post("/recipes/:id/comments", isLoggedIn, (req, res) => {
    Recipe.findById(req.params.id).populate("comments").exec((err, foundRecipe) => {
        if(err || !foundRecipe){
            req.flash("error", "We couldn't find the recipe you were looking for");
            res.redirect("back");
        } else {
            Comment.create(req.body.comment, (err, createdComment) => {
                if(err || !createdComment){
                    req.flash("error", "Your comment couldn't be created, please try again");
                    res.redirect("back");
                } else {
                    createdComment.author.id = req.user._id;
                    createdComment.author.username = req.user.username;
                    createdComment.save();
                    foundRecipe.comments.push(createdComment);
                    foundRecipe.save();
                    req.flash("esuccess", "Your comment has been added");
                    res.redirect(`/recipes/${req.params.id}`);
                }
            });
        }
    });
});

// EDIT
commentRoutes.get("/recipes/:id/comments/:comment_id/edit", checkCommentOwnership, (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if(err || !foundComment){
            req.flash("error", "We couldn't find the comment you were looking for");
            res.redirect("back");
        } else {
            res.render("comments/edit", {comment:foundComment, recipe_id:req.params.id});
        }
    });
});

// UPDATE
commentRoutes.put("/recipes/:id/comments/:comment_id", checkCommentOwnership, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if(err || !updatedComment){
            req.flash("error", "Your comment couldn't be updated, please try again");
        } else {
            req.flash("success", "Your comment has been updated");
            res.redirect(`/recipes/${req.params.id}`);
        }
    });
});

// DELETE
commentRoutes.delete("/recipes/:id/comments/:comment_id", checkCommentOwnership, (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (err, deletedComment) => {
        if(err || !deletedComment){
            req.flash("error", "Your comment couldn't be deleted, please try again");
            res.redirect("back");
        } else {
            req.flash("success", "Your comment has been deleted");
            res.redirect(`/recipes/${req.params.id}`);
        }
    });
});

export default commentRoutes;