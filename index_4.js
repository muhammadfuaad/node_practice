const {MongoClient} = require("mongodb")
const url = "mongodb+srv://fuaad29:1234567890@cluster0.imqnzjb.mongodb.net/"
const datbaseName = "ecommerce"
const collectionName = "users"
const client = new MongoClient(url)
async function crud() {
  let result = await client.connect()
  db = result.db(datbaseName)
  collection = db.collection(collectionName)
  async function getData() {
    let data = await collection.find({name: "Mehsum"}).toArray()
    console.log("data:", data);
  }
  getData()

  async function sendData() {
    console.log("This is sendData");
    let data = {name: "Burhan"}
    let result = await collection.insertOne(data)
    console.log("result:", result);
  }
  sendData()
}
crud()