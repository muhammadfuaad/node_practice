const dbConnection = require("./mongodb")

dbConnection().then((data_1)=>{
  // console.log("data_1:", data_1);
  // console.log("data_1.find({}):", data_1.find({}));
  // console.log("data_1.find({}).toArray():", data_1.find({}).toArray());
  data_1.find({}).toArray().then((data_2)=>{
    console.warn("data_2(data from then statement):", data_2)
  })
})

const main = async ()=>{
  let data = await dbConnection()
  data = await data.find({}).toArray()
  console.log("data(data from async/await):", data);
}
main()