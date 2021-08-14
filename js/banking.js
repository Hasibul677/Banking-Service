document.getElementById('submit').addEventListener('click', function(){
    console.log('clicked');
    // email part
    const emailField = document.getElementById('input-text');
    const inputEmail = emailField.value;
    // password part
    const passwordField = document.getElementById('password-text');
    const inputPassword = passwordField.value;

    if(inputEmail =='shanto@gmail.com' && inputPassword=='secret'){
        window.location.href='account.html';
    }

})