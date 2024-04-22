const mongoose = require("mongoose")

const saveInDb = async () => {
  await mongoose.connect("mongodb+srv://fuaad29:1234567890@cluster0.imqnzjb.mongodb.net/ecommerce")
  const userSchema = new mongoose.Schema({
    name: String
  })
  const userModel = mongoose.model("users", userSchema)
  const data  = new userModel({name: "Muavia"})
  const result = await data.save()
  console.log(result);
}

saveInDb()

// const updateInDb = async () => {
//   await mongoose.connect("mongodb+srv://fuaad29:1234567890@cluster0.imqnzjb.mongodb.net/ecommerce")
//   const userSchema = new mongoose.Schema({
//     name: String
//   })
//   const userModel = mongoose.model("users", userSchema)
//   const data  = new userModel({name: "M Fuaad"})
//   const result = await data.save()
//   console.log(result);
// }

// updateInDb()