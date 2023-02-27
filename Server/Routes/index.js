import {Router} from "express";
import authRoute from "./auth.js";
import postRoute from "./post.js";
import categoryRoute from "./category.js";

const router = Router()

router.use("/api/auth",authRoute)
router.use("/main",postRoute)
router.use("/category",categoryRoute)

export default router
