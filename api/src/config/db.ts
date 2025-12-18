import mongoose from "mongoose";

export const conncetDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
    console.log("✅ Database schema initialized successfully");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
  }
};
