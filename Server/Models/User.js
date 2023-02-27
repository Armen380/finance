import mongoose from "mongoose";

const UserShchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required: true
        },
        avatar:{
            type:String,
            required:true,
            default: ' '
        }
    },
    {timestamps:true}
)

export default mongoose.model("User",UserShchema)