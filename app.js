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







        $(function(){
          let $inputEmail= $('#inputEmail')
          let $inputPassword=$('#inputPassword')

          $('#submit').on('click', function(){

          let logIn = {
            inputEmail: $inputEmail.value(),
            inputPassword: $inputPassword.value(),
          }
          $.ajax({
            type: 'POST',
            url: './forms/userPage.html',
            data: logIn,
            success: function(newUser){
              $users.append('<li>userName: '+ newUser.inputEmail+ '</li>')
              console.log(newUser.inputEmail)
            },
            error: function(){
              alert(error)
            }
          })
        })
        })

    

    