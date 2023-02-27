import  {Router}  from "express";
import { checkAuth } from "../Middlewares/checkAuth.js";
import multer from "multer";
import User from "../Models/User.js";
import { UserValidation } from "../Validations/UserValidation.js";
import userController from "../Controllers/UserController.js";

const router =  Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/upload", checkAuth, upload.single("image"), async (req, res) => {
  const filePath = `${process.env.URL}/uploads/${req.file.originalname}`;
  const doc = await User.findByIdAndUpdate(req.userId, { avatar: filePath });

  res.json(doc);
});
//register
router.post("/register", UserValidation, userController.Register);
//login
router.post("/login", userController.Login);
//getMe
router.get("/getMe", checkAuth, userController.GetMe);
export default router;
