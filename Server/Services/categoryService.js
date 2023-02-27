import User from "../Models/User.js";
import Category from "../Models/Category.js";

class categoryService{
     async addCategory(id,name){
        const userId = await User.findById(id)
         const category = new Category({name,userId})
        await category.save()

        return category
    }
    async categories(id){
        const userId = await User.findById(id)
        const catgories = await Category.find({userId: userId })

        return catgories
    }

}

export default new categoryService()