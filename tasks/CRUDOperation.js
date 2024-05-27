const express = require("express")
const app = express()
const port = 3001
const data = [{
    "id": "2024-05-27T16:27:50.169Z",
    "name": "John Doe",
    "email": "random@gmail.com",
    "rollNumber": "seebiz.gpt0124evedev66",
    "password": 123
  }]

app.use(express.json())

app.get("/", async (req, res)=>{
  console.log(data);
  res.send(data)
})

app.post("/create_new_user", async (req, res)=>{
  console.log("req.body:", req.body);
  const id =new Date(Date.now()).toISOString()
  const obj = {id: id, name: req.body.name, email: req.body.email, password: req.body.password, rollNumber: req.body.rollNumber}
  console.log("obj:", obj);
  data.push(obj)
  // console.log("data:", data);
  // res.send(`New Object ${req.body} created successfully.`)
  // return data
  return res.send(data)
})

app.put("/users/:id", async (req, res)=>{
  const id = req.params.id
  const index = req.params.id - 1
  // console.log("req.params:", req.params);
  // console.log("req.body:", req.body);
  const updatedKeys = Object.keys(req.body)
  const length = updatedKeys.length
  console.log("updatedKeys:", updatedKeys);
  const firstKey = updatedKeys[0]
  console.log("firstKey:", firstKey);

  const updatedValues = Object.values(req.body)

  console.log("updatedValues:", updatedValues);
  const firstValue = updatedValues[0]
  console.log("firstValue:", firstValue);

  const updatedElement = data.find(obj => obj.id === "2024-05-27T16:27:50.169Z")
  // console.log("updatedElement:", updatedElement);
  
  console.log("updatedElement[updatedKeys[0]]:", updatedElement[updatedKeys[0]])

  for (let i=0; i<length; i++) {
    updatedElement[updatedKeys[i]] = updatedValues[i]
  }
  // updatedElement[firstKey] = firstValue
  console.log("updatedElement:", updatedElement);


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

// {
//   "name": "John Doe",
//   "email": "random@gmail.com",
//   "rollNumber": "seebiz.gpt0124evedev66",
//   "password": 123
// }