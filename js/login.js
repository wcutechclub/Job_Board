"use strict"

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector( ".signin" );
const errorMessage = document.querySelector( ".error_message-container" );

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

btnLogin.addEventListener("click", async function (e) {
    e.preventDefault();

    const loginData = {
        email: inputEmail.value,
        password: inputPassword.value,
    };

    try {
        const response = await fetch('http://localhost:8000/user/login/', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login successful:", data);

            const token = data.token;
            const userId = data.user_id;

            localStorage.setItem("authToken", token);
            localStorage.setItem("userId", userId);

            window.location.href = "/home.html";
        } else {
            inputEmail.classList.add( 'error' );
            inputPassword.classList.add( 'error' );
            errorMessage.innerHTML = '<p>Please ensure that your email and password are correct.</p>';
        }
    } catch (error) {
        console.error("Error: ", error);
        alert("An unexpected error occurred. Please try again later.");
    }
});
