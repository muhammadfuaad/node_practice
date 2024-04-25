async function crud() {
  const express = require("express")
  require("./config")
  const User = require("./user")
  console.log("User:", User);
  const app = express()
  app.use(express.json())

  // async function getData() {
  //   let data = await User.find()
  //   console.log("data:", data);
  // }
  // getData()

  // async function sendData() {
  //   let data = new User({name: "Mohsin"})
  //   let result = await data.save()
  //   console.log("result:", result);
  // }
  // sendData()

  // async function updateData() {
  //   let filter = {name: "Mohsin"}
  //   let updateDoc = {name: "Mohsin Naqvi"}
  //   let result = await User.updateOne(filter, updateDoc)
  //   console.log("result in updateData:", result);
  // }
  // updateData()

  async function deleteData() {
    let filter = {name: "Shahzaib"}
    let data = await  User.find(filter)
    console.log("data.length:", data.length);
    if (data.length > 1) {
      let result = await User.deleteMany(filter)
      console.log("result for more than 1 elements:", result);

    } else if (data.length == 0) {
      console.log("Nothing found to delete");

    } else if (data.length == 1) {
      let result = await User.deleteOne(filter)
      console.log("result for 1 element:", result);

    } 
    // console.log(result);
  }
  deleteData()
}
crud()