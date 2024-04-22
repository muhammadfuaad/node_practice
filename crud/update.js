const dbConnection = require("../mongodb")

const updateData =async () => {
  const data = await dbConnection()
  const filter = {name: "Saim"}
  const update = {name: "M Fuaad"}
  const result = data.updateMany(filter, {$set: update}) || data.updateOne(filter, {$set: update}) 
  console.log("result:", result);
}

updateData()