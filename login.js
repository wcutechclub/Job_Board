"use strict"

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".signin");



let userDetail = {
    "email":"",
    "password":""
}

btnLogin.addEventListener("click", function(e){
    e.preventDefault()
    userDetail.email = inputEmail.value;
    userDetail.password = inputPassword.value
    console.log(userDetail)
    inputEmail.value=""
    inputPassword.value=""
})
