import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mogoDb is connected");
    return;
  } else {
    try {
      mongoose.connect(proces.env.MONGODB_URI, {
        dbName: "foodie-planner-db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
