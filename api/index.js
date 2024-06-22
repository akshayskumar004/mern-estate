import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"; //import router as userRouter
import authRouter from "./routes/auth.route.js"; //import router as authRouter

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
