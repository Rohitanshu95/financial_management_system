import "dotenv/config";
import mongoose from "mongoose";
import { Env } from "./config/env.config";
import UserModel from "./models/user.model";
import TransactionModel from "./models/transaction.model";
import ReportSettingModel from "./models/report-setting.model";

const clearData = async () => {
  try {
    console.log("🧹 Starting Database Cleanup...");

    // Connect to Database
    await mongoose.connect(Env.MONGO_URI);
    console.log("📡 Connected to MongoDB");

    // Clear Existing Data
    await UserModel.deleteMany({});
    await TransactionModel.deleteMany({});
    await ReportSettingModel.deleteMany({});
    console.log("✅ All data cleared successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Cleanup Failed:", error);
    process.exit(1);
  }
};

clearData();
