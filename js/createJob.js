"use strict"

const token = localStorage.getItem( "authToken" );

if ( !token ) {
  alert( "You need to log in!" );
  window.location.href = "/login.html";
}

const form = document.querySelector( '.create_job-form' );
const titleInput = document.querySelector( '.title-input' );
const descriptionInput = document.querySelector( '.description-input' );
const jobCategory = document.querySelector( '.categoty-input' );
const jobType = document.querySelector( '.job-type' );
const jobLocation = document.querySelector( '.location-input' );
const jobSalary = document.querySelector( '.salary-input' );

const backDrop = document.getElementById( 'backdrop' );
const modal = document.getElementById( 'modal' );


form.addEventListener( 'submit', async function ( e ) {
    e.preventDefault();
    const jobData = {
        title: titleInput.value,
        description: descriptionInput.value,
        job_category: jobCategory.value,
        type: jobType.value,
        location: jobLocation.value,
        salary_range: jobSalary.value,
        poster_id: localStorage.getItem('userId'),
    }
    try {
        const response = await fetch( 'http://localhost:8000/jobs/', {
            method: 'POST',
            body: JSON.stringify( jobData ),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${ token }`,
            },
        } );
        if ( response.ok ) {
            const data = await response.json();
            modal.insertAdjacentHTML( "beforeend", `
                <h3>Job Created Successful</h3>
                <p>Your ${ data.title } job created successfully.
                Check 'My Jobs page if there any applyer.
                <a>Add a new job</a>
                <a>Back to home</a>`);
            backDrop.classList.add( 'backdrop' );
            modal.classList.add( 'modal' );
        } else {
            const errorData = await response.json();
            console.log( errorData );
            console.log( 'Job create falied!' );
        }
    } catch ( error ) {
        console.log("Error: ", error);
    }
})
