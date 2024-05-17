const express = require("express")
const port = 3000

const app = express()

app.get("/", (req, res)=>{
  console.log("req.query:", req.query);
  res.send("Hi there")
})

app.get("/about", (req, res)=>{
  res.send(
    `
      <input>name</input>
      <a href="/home">Go to Home page</a>
    `
  )
})

app.get("/contact", (req, res)=>{
  res.send([
    {
    name: "ABC",
    age: 12
    },
    {
    name: "ABC",
    age: 12
    },
    {
      name: "ABC",
      age: 12
    },
  ])
})

app.get("/home", (req, res)=>{
  res.send(JSON.stringify([
    {
    name: "ABC",
    age: 12
    },
    {
    name: "ABC",
    age: 12
    },
    {
      name: "ABC",
      age: 12
    },
  ]))
})

app.get("/index", ()=>{
  res.send()
})

app.listen(3000, ()=>{
  console.log(`server is running at post ${port}`);
})