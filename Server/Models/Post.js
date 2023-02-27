import mongoose from "mongoose";

const PostShchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        categoryId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {timestamps:true}
)

export default mongoose.model("Post",PostShchema)

