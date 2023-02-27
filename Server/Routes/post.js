import { checkAuth } from "../Middlewares/checkAuth.js";
import { PostValidate } from "../Validations/PostValidation.js";
import  {Router}  from "express";
import postController from "../Controllers/PostController.js";

const router =  Router();

router.post("/addPost", checkAuth, PostValidate, postController.addPost);
router.get("/post/:id", checkAuth, postController.getPostsByCategory);
router.get("/postsPrice/:id", checkAuth, postController.getPostPrice);
router.delete("/deletePost/:id", checkAuth, postController.deletePost);

export default router;