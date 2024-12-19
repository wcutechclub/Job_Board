"use strict"

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".signin");

let loginData = {
    email:"",
    password:"",
}

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

btnLogin.addEventListener("click", function(e){
    e.preventDefault()
    loginData.email = inputEmail.value;
    loginData.password = inputPassword.value
    loginData = JSON.stringify( loginData )
    fetch( 'http://localhost:8000/user/login/', {
        method: 'POST',
        body: loginData,
        headers: headers
    } )
        .then( response => response.json() )
        .then( data => {
            headers['Authorization'] = `Token ${data.token}`
            console.log(headers);
        } )
        .catch(error => console.error('Error: ', error))
})

export default headers
