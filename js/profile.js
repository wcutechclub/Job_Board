const firstName = document.querySelector( '.fname' );
const lastName = document.querySelector( '.lname' );
const profilePic = document.querySelector( '.profile-pic' );
const bioText = document.querySelector( '.bio' );
const userEmail = document.querySelector( '.email-link' );
const userResume = document.querySelector( '.resume-btn' );

const token = localStorage.getItem("authToken");

if ( !token ) {
  alert( "You need to log in!" );
  window.location.href = "/login.html";
}

fetch("http://localhost:8000/user/me/", {
    method: "GET",
    headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
    },
})
.then(response => {
    if (response.ok) return response.json();
    throw new Error("Failed to fetch profile data");
})
  .then( data => {
  console.log(data);
  firstName.innerText = data.first_name;
  lastName.innerText = data.last_name;
  bioText.innerText = data.bio;
  userEmail.innerText = data.email;
  userResume.href = data.resume_url;
  profilePic.src = data.profile_pic_url
})
.catch(error => console.error("Error:", error));

