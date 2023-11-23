import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDb is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "foodie_planner_DB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("mongoDb is connected");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
