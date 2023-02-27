import { validationResult } from "express-validator";
import userService from "../Services/userService.js";

class UserController  {
  async Register(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(errors);
      }
      const { username, password } = req.body;

      const newUser = await userService.Register(username, password);
      res.json({
        newUser,
        message: "դուք հաջողությամբ գրանցվեցիք",
      });
    } catch (err) {
      res.json({
        message: "գրանցման ժամանակ սխալ կա",
        err,
      });
    }
  }

  async Login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await userService.Login(username, password);

      res.json({
        token,
        message: "դուք հաջողությամբ մուտք գործեցիք",
      });
    } catch (err) {
      return res.json({ message: "Չհաջողվեց մուտք գործել" });
    }
  }

  async GetMe(req, res) {
    try {
      const user = await userService.GetMe(req.userId);
      if (!user) {
        return res.json({ message: "օգտատերը չի գտնվել" });
      }

      res.json(user);
    } catch (err) {
      res.json({ message: "դոստուպ չկա" });
    }
  }
}

export default new UserController();
