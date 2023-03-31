function Login(){
    inputtext =  document.getElementById('usernameInput')
    inputpassword = document.getElementById('passwordInput')

    if (inputtext.value.length != 0 && inputpassword.value.length != 0) {
        window.location.replace('loggedin.html')
    }
    else{
        alert('No Input!')
    }
}