const express = require("express")
const cors = require('cors')
require("./config")
const User = require("./user")
console.log("User:", User);
const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  return res.render("form")
})

app.post("/create", async (req, res)=>{
  let data = new User(req.body)
  console.log("data:", data);
  // questions:
  // why does it show twice in backend console?
  let result = await data.save()
  console.log(result);
  res.send(req.body)
})

app.get("/list", async (req, res)=>{
  console.log("User:", User);
  let data = await User.find()
  res.send(data)
})

app.delete("/delete/:_id", async (req, res)=>{
  console.log(req.params);
  let data = await User.deleteOne(req.params)
  res.send(data)
})

app.put("/update/:_id", async (req, res)=>{
  console.log(req.params);
  let data = await User.updateOne(
    req.params,
    {
      $set: req.body
    }
  )
  res.send(data)
})

app.get("/search/:key", async (req, res)=>{
  console.log(req.params.key);
  let data = await User.find(
    {
      $or: [{"name": {$regex: req.params.key}}]
    }
  )
  res.send(data)
})


app.listen(PORT, ()=>{
  console.log(`server is runnng at ${PORT}`);
})