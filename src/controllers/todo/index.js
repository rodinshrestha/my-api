import Todo from "../../Models/Todos/index.js";

export const getTodos = async (req, res, next) => {
  try {
    const found = await Todo.find();
    res.status(200).json({ data: found });
  } catch (err) {
    next({ status: 400, msg: "server error" });
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const resp = await Todo.create({ ...req.body });
    res.status(200).json({ message: "todo created" });
  } catch (err) {
    next({ status: 400, msg: err.message });
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = await Todo.findByIdAndUpdate({ _id: id }, { ...req.body });
    if (!found) next({ status: 404, msg: "todo not found" });
    res.status(200).json({ message: "update successfull" });
  } catch (err) {
    next({ status: 400, msg: err.message });
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = await Todo.deleteMany({ _id: { $in: id } });
    if (!found) return next({ status: 404, msg: "file not found" });
    res.status(200).json({ message: "delete succesfull" });
  } catch (err) {
    next({ status: 400, msg: err.message });
  }
};

export const deleteAll = async (req, res, next) => {
  try {
    const resp = await Todo.deleteMany({});
    res.status(200).json({ message: "All the todos are deleted" });
  } catch (err) {
    next({ status: 400, msg: err.message });
  }
};
