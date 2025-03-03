const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const profilePic = document.querySelector(".profile-pic");
const bioText = document.querySelector(".bio");
const userEmail = document.querySelector(".email-link");
const userResume = document.querySelector(".resume-btn");

const token = localStorage.getItem("authToken");
const userId = localStorage.getItem("userId");
const userType = localStorage.getItem("userType");

if (!token || !userId || !userType) {
  alert("You need to log in!");
  window.location.href = "login.html";
}

const myJobLink = document.querySelector(".my-jobs__link");
if (userType === "JF") {
  myJobLink.setAttribute("href", "myjobsseeker.html");
} else {
  myJobLink.setAttribute("href", "myjobsPoster.html");
}

if (!token) {
  alert("You need to log in!");
  window.location.href = "login.html";
}

fetch("http://localhost:8000/user/me/", {
  method: "GET",
  headers: {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.ok) return response.json();
    throw new Error("Failed to fetch profile data");
  })
  .then((data) => {
    firstName.innerText = data.first_name;
    lastName.innerText = data.last_name;
    bioText.innerText = data.bio;
    userEmail.innerText = data.email;
    userResume.href = data.resume_url;
    profilePic.src = data.profile_pic_url;
  })
  .catch((error) => console.error("Error:", error));
