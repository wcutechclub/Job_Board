"use strict";

const form = document.querySelector(".form");

// Inputs
const inputFirstName = document.querySelector(".fname");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm_password");
const inputResumeLink = document.querySelector(".resume");

///////////////////////////////////////////////////////
const industryType = document.querySelector(".industry-type");
const genderInput = document.querySelector(".gender-input");

const inputProfileLink = document.querySelector(".profile");
const inputBio = document.getElementById("bio");

const btn = document.querySelector(".signup_btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (confirmPasswordInput.value === passwordInput.value) {
    const signUpData = {
      first_name: inputFirstName.value,
      last_name: inputLastName.value,
      email: inputEmail.value,
      gender: genderInput.value,
      password: passwordInput.value,
      bio: inputBio.value,
      job_category: industryType.value,
      resume_url: inputResumeLink.value,
      profile_pic_url: inputProfileLink.value,
      user_type: "JF",
    };
    console.log(signUpData);

    try {
      const response = await fetch("http://localhost:8000/user/create/", {
        method: "POST",
        body: JSON.stringify(signUpData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign up Successful: ", data);
        window.location.href = "login.html";
      } else {
        const errorData = await response.json();
        alert(
          "Sign Up failed: " + errorData.detail ||
            "Please check your signup form."
        );
      }
    } catch (error) {
      console.log("Error: ", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }
});
