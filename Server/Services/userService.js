import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
class userService{
    async Register(username,password){
        const isUsed = await User.findOne({username})

        if(isUsed){
            throw new Error("տվյալ անունը զբաղված է")
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username:username,
            password:hashPass,
        })
        await newUser.save()

        return newUser
    }

    async Login(username,password){
        const user = await User.findOne({username})

        if(!user){
            throw new Error("նման օգտատեր չկա")
        }

        const isPassCorrect = await bcrypt.compare(password,user.password)

        if(!isPassCorrect){
            throw new Error("գաղտնաբառը սխալ է")
        }else{
            const token = jwt.sign({id: user._id,}, process.env.JWT_SECRET)

            return token
        }
    }
    async GetMe(id){
        const user = await User.findById(id)

        return user
    }
}

export default new userService()