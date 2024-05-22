const http = require('http');
const dt = require('./date');
const data = require('./data')
const port = 3001

const server = http.createServer(function (req, res) {

  if (req.url==="/users"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(JSON.stringify(data))
    // res.end("")
  } else if (req.url==="/user" && req.method==="POST") {
    let users ='';
    req.on("data", (chunk)=>{
    users +=chunk; 
    console.log("chunk:", chunk);
    });
    req.on("end", ()=>{
      console.log("users:", users);
      data.push(JSON.parse(users))
    });
    res.end("POST api successful")
  } else if (req.url === "/update/:id" && req.method === "PUT") {
    console.log("req:", req);
    console.log("req.body:", req.body);
    console.log("req.params:", req.params);


    res.end("PUT api successful right now")


  }
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // // res.write("<h1>The date and time are currently: </h1>" + dt.myDateTime());
  // res.write(JSON.stringify({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"}))
  // res.end();
  // console.log("req.url:", req.url);

}).listen(port, ()=>{
  console.log(`server is running at port ${port}`);
});
