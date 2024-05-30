const express = require("express")
const ejs = require("ejs")
const app = express()
const port = 3001
// const data = require("../data")

app.use(express.json())
app.set('view enginer', ejs)

app.get("/", async (req, res)=>{
  let data = { 
    name: 'Muhammad Fuaad', 
    skills: ['React', 'Node', 'Express', 'MongoDB'] 
} 
  res.render("home.ejs", {data: data})
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}`);
})