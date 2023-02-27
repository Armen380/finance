import express from "express";
import cors from "cors";
import routes from "./Routes/index.js";

const App = express();
App.use(cors());
App.use(express.json());
App.use(express.static("../client/build"));
App.use("/uploads", express.static("uploads"));
App.use("/",routes)

export default App