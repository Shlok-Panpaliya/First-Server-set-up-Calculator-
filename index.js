
const express = require("express");
const bodyParser = require('body-parser')
//const bodyParser = body-parser();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index1.html");
});

app.post("/",function(req,res){

  var num1 = Number(req.body.n1);

  var num2 = Number(req.body.n2);

  var result = num1+num2;

  res.send("Result is " + result);
});
app.listen(3000,function(){
    console.log("Server is set at 3000");
});
