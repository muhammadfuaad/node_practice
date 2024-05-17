var http = require('http');
var dt = require('./date');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("<h1>The date and time are currently: </h1>" + dt.myDateTime());
  res.write(JSON.stringify({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"}))
  res.end();
  console.log("res:", res);
  console.log("res.body:", res.body);
  console.log("res.head:", res.head);
}).listen(8080, ()=>{
  console.log(`server is running`);
});