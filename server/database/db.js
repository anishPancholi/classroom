import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("connecting")
    await mongoose.connect(process.env.DB);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
