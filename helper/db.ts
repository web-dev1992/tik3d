import { MongoClient } from "mongodb";
// const uri = "mongodb://localhost:27017/Tik3D?directConnection=true";
const connectionString = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_cluster}.fcm60hd.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;
export async function connectToDatabase(fn, res) {
  const id = setTimeout(
    () =>
      res.json({
        message:
          "خطایی در سرویس بانک اطلاعاتی mongoose وجود دارد . این خطا مربوط به سایت atlas mongoose است و ارتباطی به سایت tik3dندارد، لطفا مجددا سعی نمایید!",
      }),
    7000
  );

  try {
    const client = await MongoClient.connect(
      connectionString
      // "mongodb+srv://taraneh:oX2pnIZtbD7Y4fgU@cluster0.fcm60hd.mongodb.net/Tik3D?retryWrites=true&w=majority"
    );
    if (client) {
      clearTimeout(id);
      console.log("connection was established!");
    }
    return client;
  } catch (err) {
    console.log("an error has happend during connecting to database!");
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
