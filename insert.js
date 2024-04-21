const dbConnection = require("./mongodb")

const insert =async () => {
  const db = await dbConnection()
  // const collection = await db.collection("ecommerce");
  const result = await db.insertMany([{
    name: "Trousers",
    price: 2,
    quantity: 12
  },
  {
    name: "Shorts",
    price: 2,
    quantity: 12
  },
  {
    name: "Track Suit",
    price: 2,
    quantity: 12
  }])
  console.log("result:", result);
}

insert()