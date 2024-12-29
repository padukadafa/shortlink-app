import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "";

if (!MONGODB_URL) {
  console.log(MONGODB_URL);
  throw new Error(
    `Please define \`MONGODB_URL\` environment variable inside ${
      process.env.NODE_ENV === "production" ? ".env" : ".env.development"
    }`
  );
}

async function connectDB() {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.log(MONGODB_URL);
    console.log(error);

    throw new Error(error as any);
  }
}

export default connectDB;
