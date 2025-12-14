import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(
    "mongodb+srv://samipawl_db_user:VHVSfsd6rmtsjAKn@popcornhub-app.unzceb4.mongodb.net/?appName=PopcornHub-app",
  );
  console.log("Connected!");
}

export default connectDB;
