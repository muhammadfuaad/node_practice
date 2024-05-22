const express = require("express")
const app = express()
const data = require("./data")
const port = 3000

app.use(express.json(), ()=>{
  console.log();
})

app.get("/", async (req, res)=>{
  console.log(data);
  res.send(data)
})

app.post("/", async (req, res)=>{
  // console.log(req.body);
  const data = await dbConnection()
  // console.log(req.body);
  // console.log(req.body.length);
  let result
  if (req.body.length > 1) {
    result = await data.insertMany(req.body)
  } else {
    result = await data.insertOne(req.body)
  }
  console.log(result);
})

app.put("/:name", async (req, res)=>{
  // console.log(req.body);
  const data = await dbConnection()
  const result = await data.updateOne({name: req.params.name}, {$set: req.body})
  console.log("req.body:", req.body);
res.send({result: "update"})})

app.delete("/", async (req, res)=>{
  const data = await dbConnection()
  let result = await data.deleteMany(req.body) || await data.deleteOne(req.body) 
  
  console.log("result:", result);
})

app.listen(port)