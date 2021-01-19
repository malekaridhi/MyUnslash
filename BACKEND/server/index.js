const express = require("express");
const mongoose= require("mongoose");
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary")
const image =require ('../database/data')
const multerC = require ('../multer')
const cors = require('cors');
var path = require('path');
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, (err) => {
    if (err) throw err;
    console.log("MONGO connected on port 4000")
  }
  );
  

  
app.use(cors({
    origin:'http://localhost:4000'
}));
app.use(express.static('images'))

app.post('/Images', multerC ,  (req,res)=>{
  console.log(req.files)
  res.json({
    msg:'done'
  })
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`the server is running on port : ${PORT}`));