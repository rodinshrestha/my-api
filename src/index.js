import express from "express";
import cors from "cors";
import dontenv from "dotenv";

import morgan from "morgan";
import todoRoutes from "./routes/todo-routes.js";
import connection from "./connection/index.js";

dontenv.config();

const app = express();

app.use(cors());

app.use(express.json());

/**Logger middleware */
app.use(morgan("tiny"));

/**
 * Routes
 */
todoRoutes(app);

app.get("/", (req, res) => {
  res.status(200).send("🚀 Hello world");
});

app.use("*", (req, res) => {
  res.status(404).send("path not found");
});

app.use((err, req, res) => {
  const { status, msg } = err;
  res.status(status || 500).json({ message: msg });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  const env = process.env.NODE_ENV || "development";
  console.log(`Application started in ${port} in ${env} environment`);

  await connection()
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));
});
