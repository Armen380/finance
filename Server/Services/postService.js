import User from "../Models/User.js";
import Post from "../Models/Post.js";
import userService from "./userService.js";
class postService {
  async addPost(id, title, price, categoryId) {
    const userId = await User.findById(id);

    const newPost = new Post({ title, price, categoryId, userId });
    await newPost.save();

    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPost },
    });

    return newPost;
  }

  async getPostsByCategory(id, page, limit, categoryId) {
    const userId = await User.findById(id);
    const skipIndex = (page - 1) * limit;
    let postCount = await Post.find({ categoryId: categoryId }).count();
    let pageCount = Math.round(postCount / limit);

    const Posts = await Post.find({ categoryId: categoryId, userId: userId })
      .limit(limit)
      .skip(skipIndex);

    const data = {
      data: Posts,
      page: skipIndex,
      limit: limit,
      pageCount: pageCount,
    };

    return data;
  }
  async getPostPrice(id, categoryId) {
    const userId = await User.findById(id);
    let price = 0;
    const allPrice = await Post.find({
      categoryId: categoryId,
      userId: userId,
    });

    allPrice.map((el) => (price += el.price));

    return price;
  }

  async deletePost(id) {
    const user = await User.findById(id);
    const deletePost = await Post.deleteOne({ _id: id });

    return deletePost;
  }
}

export default new postService();
