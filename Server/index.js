import mongoose from "mongoose";
import dotenv from "dotenv";
import App from "./App.js";

dotenv.config();
// config  Constants
const PORT = process.env.PORT || 3001; 
const DB_NAME = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_User = process.env.DB_USER;

const start = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${DB_User}:${DB_PASSWORD}@mobile.cr4turq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
      )
      .then(() => console.log("db ok"))
      .catch((err) => console.log(err));

    App.listen(PORT, () => {
      console.log(`server started in ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
