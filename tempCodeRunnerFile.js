var http = require('http');
var dt = require('./date');
const port = 8080

const server = http.createServer(function (req, res) {
if(req.url==="/"){
  res.end("Home pagr....")
} else if(req.url==="user" && http.METHODS==="POST"){
  let users ='';
  res.on("data", (chunk)=>{
  users +=chunk; 
  })
  res.on("end", ()=>{
    console.log(users);
  })
  res.end("Data posted successfully!")
}
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // // res.write("<h1>The date and time are currently: </h1>" + dt.myDateTime());
  // res.write(JSON.stringify({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"}))
  // res.end();
  // console.log("req.url:", req.url);

}).listen(port, ()=>{
  console.log(`server is running at port ${port}`);
});
