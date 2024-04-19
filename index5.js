const {MongoClient} = require("mongodb")
const url = "mongodb+srv://fuaad29:1234567890@cluster0.imqnzjb.mongodb.net/"
const datbaseName = "ecommerce"
const client = new MongoClient(url)

async function dbConnection() {
  let result = await client.connect()
  db = result.db(datbaseName)
  return collection = db.collection("products")
  // let data = await collection.find({name: "P3"}).toArray()
  // console.log(data);
}

dbConnection().then((data)=>{
  data.find({name: "P2"}).toArray().then((data)=>{
    console.log("data:", data)
  })
})
console.warn(dbConnection())