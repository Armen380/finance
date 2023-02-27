import { validationResult } from "express-validator";
import postService from "../Services/postService.js";

class PostController {
  async addPost(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json  (errors);
      }
      const { title, price, categoryId } = req.body;
      const newPost = await postService.addPost(
        req.userId,
        title,
        price,
        categoryId
      );

      await res.json(newPost);
    } catch (err) {
      res.send({ message: "ինչ որ բան այն չէ" });
    }
  }
  async getPostsByCategory(req, res) {
    try {
      const categoryId = req.params.id;
      let { page, limit } = req.query;
      const Posts = await postService.getPostsByCategory(
        req.userId,
        page,
        limit,
        categoryId
      );
      const price = await postService.getPostPrice(req.userId, categoryId);

      if (!Posts) {
        res.json({ message: "Այս բաժնում ծախսեր չկան" });
      }
      res.json({
        data: Posts.data,
        price: price,
        page: Posts.page,
        limit: Posts.limit,
        pageCount: Posts.pageCount,
      });
90    } catch (e) {
      res.json({ message: "խնդրում ենք վերագործարկել ծրագիրը" });
    }
  }
  async getPostPrice(req, res) {
    try {
      const categoryId = req.params.id;
      const price = await postService.getPostPrice(req.userId, categoryId);
      res.json({
        price: price,
        categoryId: categoryId,
      });
    } catch (e) {
      res.json({ message: "Չհաջողվեց ստանալ գինը" });
    }
  }
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const deletePost = await postService.deletePost(id);
      res.json({
        post: deletePost,
        message: "Ծախսը հաջողությամբ ջնջված է",
      });
    } catch (e) {
      res.json({
        message: "Չհաջողվեց ջնջել փոստը",
      });
    }
  }
}

export default new PostController();
