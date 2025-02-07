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
                <h3>Job Created Successfully!</h3>
                <p>Your <span> ${ data.title } </span> job created successfully.
                Check 'My Jobs' page if there any applyer.</p>
                <div class="popup-cta">
                    <a href="/postjob.html" class="popup-btn acpt-btn">Add a new job</a>
                    <a href="/home.html" class="popup-btn rcjt-btn">Back to home</a>
                </div>`);
            backDrop.classList.add( 'backdrop' );
            modal.classList.add( 'modal' );
        } else {
            modal.insertAdjacentHTML( "beforeend", `
                <h3>Job Creation Alert: Action Required.</h3>
                <p>Oops! It looks like there were some issues your job creation. Please
                double check your inputs and enusre all required fields are filled out.</p>.
                <div class="popup-cta">
                    <a href="#" class="popup-btn acpt-btn">Ok</a>
                </div>`);
            backDrop.classList.add( 'backdrop' );
            modal.classList.add( 'modal' );
            document.querySelector( '.popup-btn' ).addEventListener('click', event => {
                event.preventDefault();
                backDrop.classList.remove( 'backdrop' );
                modal.classList.remove( 'modal' );
                modal.innerHTML = "";
            })
        }
    } catch ( error ) {
        console.log("Error: ", error);
    }
})

