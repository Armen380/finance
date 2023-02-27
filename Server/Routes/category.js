import  {Router}  from "express";
import { checkAuth } from "../Middlewares/checkAuth.js";
import categoryController from "../Controllers/CategoryController.js";

const router =  Router();

router.get("/categories", checkAuth, categoryController.categories);
router.post("/addCategory", checkAuth, categoryController.addCategory);

export default router;
