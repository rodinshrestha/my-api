import { Schema, model } from "mongoose";

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
