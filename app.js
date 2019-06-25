'use strict'



let redirect = function(){
  document.location.href="./forms/page3.html"
}



var form = document.getElementsByClassName('form-signin');
form.onsubmit = function(e){
  e.preventDefault();
  var result = document.getElementById('result');
  
result.innerHTML= 'Welcome' + form.inputEmail.value;
console.log(result)
  this.reset();
}

