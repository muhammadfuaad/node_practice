// write an api that accepts email as body of the request and adds dots "." in place of characters after 
// the fourth one and before "@" 

const express = require("express")
const port = 3000;
const app = express()
app.use(express.json())

app.post("/user", (req, res)=>{
  let email = req.body.email
  console.log(`email: ${email}`);
  const emailLength = email.length
  console.log(`emailLength: ${emailLength}`);
  
  const index = email.indexOf("@")
  console.log("index:", index);

  for(let i=0; i<emailLength; i++) {
    if(i > 3 && i < index) {
      email = email.substring(0, i) + '.' + email.substring(i+1);
    }
  }
  console.log(`email: ${email}`);

  const num1 = Math.random() * 1000000
const num2 = Math.floor(num1)

  const obj = {id: num2, email: email}
  return res.send(obj)
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}.`);
})
