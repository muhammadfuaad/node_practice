const dbConnection = require("../mongodb")

const deleteData =async () => {
  const data = await dbConnection()
  const filter = {name: "M Rehan"}
  const result = await data.deleteMany(filter) || await db.deleteOne(filter)
  // const result = await db.deleteOne(filter)
  // This is used if only one record needs to be deleted even if there exist multiple records with same name
  console.log("result:", result);
}

deleteData()