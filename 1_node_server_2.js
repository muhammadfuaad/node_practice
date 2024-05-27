const express = require("express")
const port = 3000;
const users = require("./data")
const app = express()

app.get("/api/users", (req, res)=>{
  return res.json(users)
})

app.get("/users", (req, res)=>{
  const html = `
    <ol>
      ${users.map((user)=>{
        return `<li>${user.id}<br>${user.name}</li>`
      }).join("")}
    </ol>
  `
  res.send(html)
})

app.get("/users/:id", (req, res)=>{
  const id = Number(req.params.id)
  const user = users[id-1]
  const html = `
    <li>${user.id}<br>${user.name}</li>
  `
  res.send(html)
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}.`);
})