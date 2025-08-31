import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running. Congratulations!!`);
    });
  })
  .catch((err) => {
    console.log(`MongoDb connecttion failed in main file!!`, err);
  });
