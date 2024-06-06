const express = require("express")
const mongodb = require("mongodb")
const cors = require('cors')
const PORT = 3000
const ObjectId = mongodb.ObjectId;

const app = express()
app.use(express.json())
app.use(cors())
const dbConnection = require("./DbConnection")

app.get("/users", async(req, res)=>{
  const usersCollection = await dbConnection()

  let data = await usersCollection.find().toArray()
  console.log("data:", data);
  res.send(data)
})

app.post("/create_user", async(req, res)=>{
  const usersCollection = await dbConnection()
  const data = req.body
  // console.log(req.body);
  let result = await usersCollection.insertOne(data)
  res.send(result)
})

app.delete("/delete_user/:id", async(req, res)=>{
  const usersCollection = await dbConnection()
  const id = req.params
  const deleteObject = await usersCollection.find({id: new ObjectId(id)})
  console.log("deleteObject:", deleteObject);
  const result = await usersCollection.deleteOne({id: new ObjectId(id)})
  res.send(result)
  // res.send(`${result}, ${id}, ${deleteObject}`)
})
app.listen(PORT, ()=>{
  console.log(`server is runnng at ${PORT}`);
})