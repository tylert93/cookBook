import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title:String,
    image:String,
    category:String,
    description:String,
    prepTime:String,
    cookTime:String,
    serves:Number,
    ingredients:String,
    method:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
});

export const Recipe = mongoose.model("Recipe", recipeSchema);