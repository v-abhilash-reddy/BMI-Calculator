const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var weight = Number(req.body.m) ;
    var height = Number(req.body.h) ;
    var bmi = weight/Math.pow(height,2);
    bmi = bmi.toPrecision(4);

    console.log(bmi);
    res.render("bmi",{bmi});
});

app.listen(process.env.PORT || 5000,function(){
    console.log('Server started on port 5000');
});