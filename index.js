import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.route.js";
import todoRouter from "./routes/todo.route.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRouter);
app.use("/api/todo", todoRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
