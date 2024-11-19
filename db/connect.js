import mongoose from "mongoose";

// MongoDB connection
export default async function connect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Mongo ${conn.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
}
