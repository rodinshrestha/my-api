import pkg from "mongoose";

const { Schema, model } = pkg;

const schema = new Schema(
  {
    title: { type: "string", required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const TodoModel = model("Todo", schema);

export default TodoModel;
