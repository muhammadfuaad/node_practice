const {MongoClient} = require("mongodb")
const url = "mongodb+srv://fuaad29:1234567890@cluster0.imqnzjb.mongodb.net/"
const datbaseName = "ecommerce"
const client = new MongoClient(url)

async function getData() {
  let result = await client.connect()
  db = result.db(datbaseName)
  collection = db.collection("users")
  let data = await collection.find({name: "P3"}).toArray()
  console.log(data);
}

getData()