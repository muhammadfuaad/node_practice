const express = require("express")
const ejs = require("ejs")
const app = express()
const alert = require("alert")
app.set('view engine', "ejs")
const port = 3001
const bodyParser = require('body-parser');

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const data =[];

app.get("/users",  (req, res)=>{
  res.render("users.ejs", {data: data})
})

app.get("/sign_up", (req, res)=>{
  res.render("sign_up.ejs")
})

app.get("/error", (req, res)=>{
  res.render("error.ejs")
})

app.post("/sign_up",  (req, res)=>{
  // console.log("req.body:", req.body);
  const {name, email, password, rollNumber}= req.body
  const found = data.some(el => el.email === email);
  if (!found) {
    const id =new Date(Date.now()).toISOString()
    const obj = {id: id, name: name, email: email, password: password, rollNumber: rollNumber}

    // console.log("obj:", obj);
    data.push(obj)
    res.redirect("/users")
  } else {
    res.send(
      `
        User already registered.
        <a>Login</a>
      `
    )
  }
  
  console.log("data:", data);
  // res.send(`New Object ${req.body} created successfully.`)
  // return data
  // return res.send(data)
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}`);
})