const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
const exp = require("constants");
const bodyParser = require("body-parser");
const router = require("./src/router/router");


app.use("/",router);

app.listen(3000,()=>{console.log("서버 구동");});

