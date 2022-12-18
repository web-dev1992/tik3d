import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017/Tik3D?directConnection=true";
export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(uri);
    if (client) console.log("connection was established!");
    return client;
  } catch (err) {
    console.log("an error has happend");
    console.log(err);
  }
}
