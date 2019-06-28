'use strict'




 
  

  $('#submit').on('click', function(){
    let $inputEmail= $('#inputEmail')
  let $inputPassword=$('#inputPassword')

  let logIn = {
    inputEmail: $inputEmail.val(),
    inputPassword: $inputPassword.val(),
  }
  $.ajax({
    type: 'POST',
    // url: '/arn:aws:execute-api:us-east-1:385562546821:fkb0t1acw8/*/POST/userlogin',
    url:'arn:aws:execute-api:us-east-1:385562546821:fkb0t1acw8/*/POST/userlogin',
    data: logIn,
    success: function(newUser){
      users.innerHTML = newUser.$inputEmail
    },

    error: function(err){
      alert(err)
    }
  })
})






    

