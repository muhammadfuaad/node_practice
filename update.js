const dbConnection = require("./mongodb")

const update =async () => {
  const db = await dbConnection()
  const filter = {name: "T-Shirts"}
  const updateDoc = {
    $set: {
      price: 5
    },
  }
  const result = await db.updateOne(filter, updateDoc)
  console.log("result:", result);
}

update()