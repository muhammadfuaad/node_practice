const express = require("express")
const app = express()
let data = require("./data")
const port = 3000

app.use(express.json())

app.get("/", async (req, res)=>{
  console.log(data);
  res.send(data)
})

app.post("/create_new_user", async (req, res)=>{
  console.log("req.body:", req.body);
  data.push(req.body)
  console.log("data:", data);
  res.send(`New Object ${req.body} created successfully.`)
})

app.put("/users/:id", async (req, res)=>{
  const id = req.params.id
  const index = req.params.id - 1
  console.log("req.params:", req.params);
  console.log("req.body:", req.body);
  console.log("req.body[0]:", req.body[0]);

  const updatedElement = data[index]
  const updatedKey = Object.keys(req.body)[index]
  const updatedValue = Object.values(req.body)[index]

  console.log("updatedElement:", updatedElement);
  console.log("updatedKey:", updatedKey);
  console.log("updatedValue:", updatedValue);
  updatedElement[updatedKey] = updatedValue
  console.log("updatedElement(2nd log):", updatedElement);
  res.send(`Element with (id=${id}) updated successfully.`)

})

app.delete("/delete/:id", async (req, res)=>{
  const id = req.params.id
  console.log("req.params.id:", req.params.id);
  console.log("typeof req.params.id:", typeof req.params.id);

  const updatedData = data.filter((element)=>{
    return element.id !== Number(req.params.id)
  })
  res.send(`Element with (id=${id}) deleted successfully.`)
  console.log("updatedData:", updatedData);

  data = updatedData
  console.log("data:", data);
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}`);
})