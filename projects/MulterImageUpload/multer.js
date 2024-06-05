const path = require("path")
const express = require("express")
const multer = require("multer")

const app = express()
const PORT = 3001

// const upload = multer({dest: "uploads/"})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)  
  }
})

const upload = multer({
  storage, 
  limits: { fileSize: 1000000},
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|zip/; // filetypes you will accept
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname))
    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error(`Only .png, .jpg and .jpeg, gif, and pdf formats allowed! and the req is ${req}`));
    }
  }
})

// if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//   cb(null, true);
// }

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
  return res.render("homepage")
})

app.post("/upload", upload.single("profileImage"), (req, res)=>{
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
  console.log("path.extname(file.originalname)", path.extname(req.file.originalname));
  res.send(`image received`)
  return res.redirect("/")
})

app.listen(PORT, ()=>{
  console.log(`server is running at port ${PORT}`);
})