import "dotenv/config";
import mongoose from "mongoose";
import { Env } from "./config/env.config";
import UserModel from "./models/user.model";
import TransactionModel, { TransactionTypeEnum, TransactionStatusEnum, PaymentMethodEnum } from "./models/transaction.model";
import ReportSettingModel, { ReportFrequencyEnum } from "./models/report-setting.model";
import { calulateNextReportDate } from "./utils/helper";
import ReportModel, { ReportStatusEnum } from "./models/report.model";

const seed = async () => {
  try {
    console.log("🌱 Starting Seeding...");

    // Connect to Database
    await mongoose.connect(Env.MONGO_URI);
    console.log("📡 Connected to MongoDB");

    // Clear Existing Data (Keep Users)
    await TransactionModel.deleteMany({});
    await ReportSettingModel.deleteMany({});
    await ReportModel.deleteMany({});
    console.log("🧹 Cleared existing transactions, settings, and reports");

    // Find an existing user or create a new one
    let user = await UserModel.findOne();
    
    if (!user) {
      user = new UserModel({
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      });
      await user.save();
      console.log("👤 Created New User: john@example.com");
    } else {
      console.log(`👤 Using Existing User: ${user.email}`);
    }

    // Create Report Settings for User
    const reportSetting = new ReportSettingModel({
      userId: user._id,
      frequency: ReportFrequencyEnum.MONTHLY,
      isEnabled: true,
      nextReportDate: calulateNextReportDate(),
    });
    await reportSetting.save();
    console.log("⚙️ Created Report Settings");

    // Create Sample Transactions
    const transactions = [
      {
        userId: user._id,
        title: "Salary",
        type: TransactionTypeEnum.INCOME,
        amount: 5000,
        category: "Salary",
        date: new Date(new Date().setDate(1)), // 1st of current month
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
      },
      {
        userId: user._id,
        title: "Rent",
        type: TransactionTypeEnum.EXPENSE,
        amount: 1200,
        category: "Housing",
        date: new Date(new Date().setDate(2)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.AUTO_DEBIT,
      },
      {
        userId: user._id,
        title: "Grocery Store",
        type: TransactionTypeEnum.EXPENSE,
        amount: 150.5,
        category: "Food",
        date: new Date(new Date().setDate(5)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CARD,
      },
      {
        userId: user._id,
        title: "Freelance Project",
        type: TransactionTypeEnum.INCOME,
        amount: 800,
        category: "Freelance",
        date: new Date(new Date().setDate(10)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
      },
      {
        userId: user._id,
        title: "Electricity Bill",
        type: TransactionTypeEnum.EXPENSE,
        amount: 85,
        category: "Utilities",
        date: new Date(new Date().setDate(12)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.BANK_TRANSFER,
      },
      {
        userId: user._id,
        title: "Netflix Subscription",
        type: TransactionTypeEnum.EXPENSE,
        amount: 15.99,
        category: "Entertainment",
        date: new Date(new Date().setDate(15)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.AUTO_DEBIT,
      },
      {
        userId: user._id,
        title: "Coffee Shop",
        type: TransactionTypeEnum.EXPENSE,
        amount: 5.5,
        category: "Food",
        date: new Date(new Date().setDate(18)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CASH,
      },
      {
        userId: user._id,
        title: "Gym Membership",
        type: TransactionTypeEnum.EXPENSE,
        amount: 50,
        category: "Health",
        date: new Date(new Date().setDate(20)),
        status: TransactionStatusEnum.COMPLETED,
        paymentMethod: PaymentMethodEnum.CARD,
      },
    ];

    await TransactionModel.insertMany(transactions);
    console.log(`💸 Inserted ${transactions.length} transactions`);

    // Create Sample Reports
    const reports = [
      {
        userId: user._id,
        period: "JANUARY 2024",
        sentDate: new Date("2024-02-01"),
        status: ReportStatusEnum.SENT,
      },
      {
        userId: user._id,
        period: "FEBRUARY 2024",
        sentDate: new Date("2024-03-01"),
        status: ReportStatusEnum.SENT,
      },
      {
        userId: user._id,
        period: "MARCH 2024",
        sentDate: new Date("2024-04-01"),
        status: ReportStatusEnum.SENT,
      },
      {
        userId: user._id,
        period: "APRIL 2024",
        sentDate: new Date(),
        status: ReportStatusEnum.PENDING,
      },
    ];

    await ReportModel.insertMany(reports);
    console.log(`📊 Inserted ${reports.length} dummy reports`);

    console.log("✅ Seeding Completed Successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Failed:", error);
    process.exit(1);
  }
};

seed();
