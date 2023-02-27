import categoryService from "../Services/categoryService.js";


class CategoryController  {
  async addCategory(req, res) {
    try {
      const name = req.body.name;
      const category = await categoryService.addCategory(req.userId, name);

      res.send(category);
    } catch (e) {
      res.json({ message: "չհաջողվեց ավելացնել կատեգոիա" });
    }
  }

  async categories(req, res) {
    try {
      const categories = await categoryService.categories(req.userId);
      res.send(categories);
    } catch (e) {
      res.json({ message: "չհաջողվեց ստանալ կատեգորիաները" });
    }
  }
}
export default new CategoryController();
