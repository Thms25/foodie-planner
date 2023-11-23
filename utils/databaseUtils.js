import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  console.log("arrived in connectToDb function");
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDb is connected");
    return;
  }

  try {
    console.log("trying to connect to mongoDB");
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "foodie_planner_DB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
