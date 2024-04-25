async function crud() {

  const data = require("./mongodb")
  const usersCollection = await data()
  console.log("usersCollection:", usersCollection);
  
  async function getData() {

    let data = await usersCollection.find().toArray()
    console.log("data:", data);
  }
  getData()

  // async function sendData() {

  //   console.log("This is sendData");
  //   let data = {name: "Burhan", age: 40, qualified: "yes"}
  //   let result = await usersCollection.insertOne(data)
  //   console.log("result of sendData:", result);
  // }
  // sendData()

  // async function deleteData() {
  //   let data = {name: "Burhan"}
  //   let result = await usersCollection.deleteMany(data) || await usersCollection.deleteOne(data)
  //   console.log("result of deleteData:", result);
  // }
  // deleteData()

  async function updateData() {
    const filter = {name: "Burhan"}
    const updateDoc = {name: "Burhan Asghar"}
    // let result = await usersCollection.updateOne(filter, {$set: updateDoc})
    // console.log("result of updateData:", result);
  }
  updateData()
}
crud()