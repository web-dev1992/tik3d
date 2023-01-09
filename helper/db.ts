import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017/Tik3D?directConnection=true";
export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://taraneh:oX2pnIZtbD7Y4fgU@cluster0.fcm60hd.mongodb.net/Tik3D?retryWrites=true&w=majority"
    );
    if (client) console.log("connection was established!");
    return client;
  } catch (err) {
    console.log("an error has happend during connecting to database!");
    console.log(err);
  }
}
