const express = require("express")
const dbConnection =require("./mongodb")
const app = express()
app.use(express.json())
app.get("/", async (req, res)=>{
  let data = await dbConnection()
  data = await data.find().toArray()
  // console.log(data);
  res.send(data)
})

app.post("/", async (req, res)=>{
  console.log(req.body);
})

app.listen(5000)