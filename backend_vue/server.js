// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser"); //json
// const cors = require("cors");

// // undefined ไม่ออก
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json()) //แปร admin  password 

// app.use(cors())
// app.use(express.static(__dirname + "/uploaded"))


// app.use("/api/v2", require("./api"));

// app.listen(8081, ()=>{
//     console.log("Server is running..")
// })
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/uploaded"))
app.use(cors())

app.use("/api/v2", require("./api_authen.js"))
app.use("/api/v2", require("./api_stock"))

app.listen(8081, ()=>{
    console.log("Server is running...")
})