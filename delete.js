const dbConnection = require("./mongodb")

const deleteData =async () => {
  const db = await dbConnection()
  const filter = {name: "Shoes"}
  const result = await db.deleteOne(filter)
  console.log("result:", result);
}

deleteData()