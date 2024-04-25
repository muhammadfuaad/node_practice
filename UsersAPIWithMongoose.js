const express = require("express")
require("./config")
const User = require("./user")
console.log("User:", User);

const app = express()
app.use(express.json())

app.post("/create", async (req, res)=>{
  let data = new User(req.body)
  let result =await data.save()
  console.log(result);
  res.send(result)
})

app.get("/list", async (req, res)=>{
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


app.listen(5000)