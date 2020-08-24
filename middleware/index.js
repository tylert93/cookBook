import { Recipe } from '../models/recipe';
import {Comment} from '../models/comment'
export const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash("error", "You must be logged in to do that")
        res.redirect("/login");
    }
}

export const checkRecipeOwnership = (req, res, next) => {
    if(req.isAuthenticated()){
        Recipe.findById(req.params.id, (err, foundRecipe) => {
            if(err || !foundRecipe){
                req.flash("error", "We couldn't find the recipe you were looking for");
                res.redirect("back");
            } else {
                if(foundRecipe.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("/recipes");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that")
        res.redirect("/login");
    }
}

export const checkCommentOwnership = (req, res, next) => {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if(err || !foundComment){
                req.flash("error", "We couldn't find the comment you were looking for");
                res.redirect("back");
            } else {
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You dont have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that")
        res.redirect("/login");
    }
}