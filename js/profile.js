const firstName = document.querySelector( '.fname' );
const lastName = document.querySelector( '.lname' );
const profilePic = document.querySelector( '.profile-pic' );
const bioText = document.querySelector( '.bio' );
const userEmail = document.querySelector( '.email-link' );
const userResume = document.querySelector( '.resume-btn' );

const logoutBtn = document.querySelector( '.logout-btn' );

const token = localStorage.getItem( "authToken" );
const userId = localStorage.getItem( "userId" );

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
  firstName.innerText = data.first_name;
  lastName.innerText = data.last_name;
  bioText.innerText = data.bio;
  userEmail.innerText = data.email;
  userResume.href = data.resume_url;
  profilePic.src = data.profile_pic_url
})
.catch(error => console.error("Error:", error));

logoutBtn.addEventListener( 'click', async function (e) {
  e.preventDefault();
  await fetch( 'http://localhost:8000/user/logout/', {
    method: 'POST',
    headers: {
      "Authorization": `Token ${ token }`,
      "Content-Type": "application/json",
    },
  } ).then( response => {
    if ( response.ok ) {
      localStorage.clear(token);
      localStorage.clear( userId );
      window.location.href = 'index.html';
      return;
    };
    throw new Error( "Faild to logout." );
  } )
})