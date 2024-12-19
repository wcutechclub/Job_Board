"use strict"

const signUpForm = document.querySelector( '.signup_form' );

signUpForm.addEventListener( "submit", async ( event ) => {
    event.preventDefault();
    const formData = new FormData( signUpForm );
    console.log(formData);
    if ( formData.get( "password" ) === formData.get( "confirm_password" ) ) {
        const signUpData = {
            firstName: formData.get( "first-name" ),
            lastName: formData.get("last-name"),
            email: formData.get("email"),
            jobCategory: formData.get("job-category"),
            gender: formData.get("gender"),
            profileLink: formData.get("profile_link"),
            resumeLink: formData.get("resume_link"),
            password: formData.get("password"),
            bio: formData.get("bio"),
        }
        console.log(signUpData);
    }
})