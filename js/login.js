"use strict"

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".signin");

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

            localStorage.setItem("authToken", token);

            window.location.href = "/profile.html";
        } else {
            const errorData = await response.json();
            alert("Login failed: " + (errorData.detail || "Please check your credentials."));
        }
    } catch (error) {
        console.error("Error: ", error);
        alert("An unexpected error occurred. Please try again later.");
    }
});
