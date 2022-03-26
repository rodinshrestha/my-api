import { Router as expressRouter } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAll,
} from "../controllers/todo";

const todoRoutes = (app) => {
  const Router = expressRouter();
  Router.get("/", getTodos);
  Router.post("/", createTodo);
  Router.put("/:id", updateTodo);
  Router.delete("/delete-all", deleteAll);
  Router.delete("/:id", deleteTodo);

  app.use("/todo", Router);
};

export default todoRoutes;
