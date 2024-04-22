const dbConnection = require("../mongodb")

const insert =async () => {
  const data = await dbConnection()
  // const collection = await db.collection("ecommerce");
  const result = await data.insertMany([{
    name: "Shahzaib",
    age: 12
  },
  {
    name: "Mehsum",
    age: 12
  },
  {
    name: "Mahad",
    age: 12
  }])
  console.log("result:", result);
}

insert()