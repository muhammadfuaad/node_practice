const http = require("http")
const data = require("./data.js")
http.createServer((request, response)=>{
  response.writeHead(200, {"content_type": "application/json"})
  response.write(JSON.stringify(data))
  response.end()
}).listen(5000)

console.log(process.argv);