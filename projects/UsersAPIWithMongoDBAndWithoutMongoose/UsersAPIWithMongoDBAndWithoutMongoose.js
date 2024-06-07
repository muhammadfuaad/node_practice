const express = require("express")
const cors = require('cors')
const PORT = 3000
const { ObjectId } = require('mongodb');
// const mongodb = require("mongodb")

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

app.post("/create", async(req, res)=>{
  const usersCollection = await dbConnection()
  const data = req.body
  let result = await usersCollection.insertOne(data)
  res.send(result)
})

app.delete("/delete/:id", async(req, res)=>{
  const usersCollection = await dbConnection()
  const { id } = req.params;
  const objectId = new ObjectId(id);
  const deleteObject = await usersCollection.findOne({_id: objectId})
  console.log("deleteObject:", deleteObject);
  const result = await usersCollection.deleteOne({_id: objectId})
  res.send(result)
  // res.send(`${result}, ${id}, ${deleteObject}`)
  // question:
  // Why does it behave differently?

})

app.put("/edit/:id", async(req, res)=>{
  const usersCollection = await dbConnection()
  const { id } = req.params;
  const objectId = new ObjectId(id);
  const updatedKey = Object.keys(req.body)[0]
  const updatedValue = Object.values(req.body)[0]
  const updateObject = await usersCollection.findOne({_id: objectId})
  console.log("updateObject:", updateObject);
  console.log("objectId:", objectId);
  console.log("typeof objectId:", typeof objectId);

  const result = await usersCollection.updateOne({_id: objectId},{$set: {[updatedKey]: updatedValue}})
  // question:
  // Why do we need to use [updatedKey]?
  
  res.send(result)
})
app.listen(PORT, ()=>{
  console.log(`server is runnng at ${PORT}`);
})