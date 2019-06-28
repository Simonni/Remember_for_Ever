'use strict'



// let redirect = function(){
//   document.location.href="./forms/page3.html"
// }



// var form = document.getElementsByClassName('form-signin');
// form.onsubmit = function(e){
//   e.preventDefault();
//   var result = document.getElementById('result');
  
// result.innerHTML= 'Welcome' + form.inputEmail.value;
// console.log(result)
//   this.reset();
// }


var express = require('express');
var app = express(); 
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.post('/user',urlencodedParser, function(req, res){
  console.log(req.body)
res.render('serverDB', {data:req.body});
});
    

    