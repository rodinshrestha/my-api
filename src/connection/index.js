import mongoose from "mongoose";

const connection = async () => {
  if (process.env.MONGO_URL)
    return await mongoose.connect(process.env.MONGO_URL);

  console.error("MONGO_URL variable is undefined. Please set it on .env");
  process.exit(500);
};
export default connection;
