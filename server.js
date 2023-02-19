import express from "express";

import { dbConnection } from "./DBConnection/DBConnect.js";
import todoRouter from "./routes/todoRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://Ayatodo-task.onrender.com/"],
  })
);
app.use(express.json());

dotenv.config();
dbConnection();

const port = process.env.PORT || 5000;

app.use("/api/aya/todo", todoRouter);
app.use("/api/aya/users", userRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    data: {
      message: `Can't find ${req.originalUrl} on this server`,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http:localhost:${port}`);
});
