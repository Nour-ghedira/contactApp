const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')

const ContactModel = require("./Models/Contact"); // pour acceder au Contact
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); //les infos recu sont tous json

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//pour faire appel au route et commance par contact 
const contactRoute=require('./Routes/contact.js');
app.use('/contact',contactRoute )


mongoose.connect("mongodb://localhost:27017/merncoursedb", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("database connected successfully");
});
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});