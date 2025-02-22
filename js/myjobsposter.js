const filterBox = document.querySelector(".filter-dropdown--container");
const filterDropdown = document.querySelector(".filter-dropdown");

const sortBox = document.querySelector(".sort-dropdown--container");
const sortDropdown = document.querySelector(".sort-dropdown");

const iconUpFilter = document.querySelector(".icon-up-filter");
const iconDownFilter = document.querySelector(".icon-down-filter");
const iconUpSort = document.querySelector(".icon-up-sort");
const iconDownSort = document.querySelector(".icon-down-sort");
// Card
const jobCard = document.querySelector(".job-cards--container");

// Applicants
const numApplicants = document.querySelector(".num-applicants");
const applicantsBtn = document.querySelector(".applicants-btn");
const applicantsList = document.querySelector(".applicant-list");

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Styles //////////////////////////////////////////////////////////////
const dropdown = function (dropdownBtn, iconUp, iconDown) {
  dropdownBtn.classList.toggle("dropdown__box--active");
  iconUp.classList.toggle("hide-icon");
  iconDown.classList.toggle("hide-icon");
};

const statusChangeColor = function (statusValue) {
  if (statusValue) {
    if (statusValue.textContent === "Active") {
      statusValue.classList.add("status-active");
      statusValue.classList.remove("status-close");
      return;
    } else statusValue.classList.remove("status-active");
    statusValue.classList.add("status-close");
    return;
  }
};

const token = localStorage.getItem( "authToken" );
const userId = localStorage.getItem( "userId" );

if ( !token ) {
  alert( "You need to log in!" );
  window.location.href = "/login.html";
}


const fetchPostedJobs = async (dispalyJbs) => {
  const response = await fetch( 'http://localhost:8000/my-jobs/posted', {
    headers: {
      'Authorization': `Token ${ token }`,
      'Content-Type': 'application/json',
    }
  } );
  const postedJobs = await response.json();
  displayJobs(postedJobs);
};

const data1 = {
  created_at: "1.12.2024",
  title: "Frontend",
  job_category: "Software Egineering",
  salary_range: "$100 - $150",
  location: "Remote",
  description: "Engineering",
  type: "FT",
  status: "Active",
};
const data2 = {
  created_at: "1.12.2024",
  title: "Frontend",
  job_category: "Software Egineering",
  salary_range: "$100 - $150",
  location: "Remote",
  description: "Engineering",
  type: "FT",
  status: "Active",
};
const data3 = {
  created_at: "1.12.2024",
  title: "Frontend",
  job_category: "Software Egineering",
  salary_range: "$100 - $150",
  location: "Remote",
  description: "Engineering",
  type: "FT",
  status: "Close",
};

const data = [data1, data2, data3];

const displayJobs = function (data) {
  data.forEach(function (job) {
    const html = `
<div class="job-cards">
          <div class="flex-container">
            <span class="light-text date">Posted on</span>
            <span class="post-date date light-text">${job.created_at}</span>
          </div>
          <h2 class="job-title card-text">${job.title}</h2>
          <div class="flex-container">
            <span class="job-category card-text">${job.job_category}</span>

            <div class="flex-container">
              <span class="card-text salary salary-type light-text"
                >monthly -</span
              >
              <span class="salary-range salary card-text light-text">
                ${job.salary_range}</span
              >
            </div>
          </div>

          <div class="flex-container">
            <div class="flex-container icon--text">
              <ion-icon class="cards-icon" name="location-outline"></ion-icon>
              <span class="job-location card-text">${job.location}</span>
            </div>
            <div class="flex-container type">
              <span class="card-text type">Type -</span>
              <span class="job-type card-text"
                >${job.type}</span
              >
            </div>
          </div>

          <p class="description card-text">${job.description}</p>

          <div class="flex-container">
            <span class="light-text card-text">Status</span>
            <span class="light-text card-text btn status-active status"
              >${job.status}</span
            >
          </div>
          <div class="applicants-container">
            <div class="flex-container applicants-btn">
              <span class="light-text card-text">Applicants:</span>
              <span class="light-text card-text num-applicants"
                >${
                  job.total_applicants
                }</span
              >
              <ion-icon name="caret-down-outline"></ion-icon>
            </div>
           <div class="applicant-list dropdown__box--active">
              <div class="applicant-details">
                <span class="applicants-name light-text card-text"
                  >Jhon Doe</span
                >
                <div class="applicant-details__btns">
                  <a href="#" class="light-text card-text resume-link"
                    >Show Resume</a
                  >
                  <div class="flex-container accept-reject__container">
                    <a
                      href="#"
                      class="light-text card-text accept-btn status-active applicant-details__btn"
                      >Accept</a
                    >
                    <a
                      href="#"
                      class="light-text card-text reject-btn status-close applicant-details__btn"
                      >Reject</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-container btns-container">
            <span class="btn cards-btn edit-btn" data-mode="edit">Edit</span>
            <span class="btn cards-btn close-btn">Close</span>
          </div>
        </div>
`;
    jobCard.insertAdjacentHTML("beforeend", html);

    // Chnges te background color of the status
    const statusContent = document.querySelector(".status");
    const newStatus = jobCard.lastElementChild.querySelector(".status");
    statusChangeColor(newStatus);
  });
};

fetchPostedJobs( displayJobs );

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
filterBox.addEventListener("click", function () {
  dropdown(filterDropdown, iconUpFilter, iconDownFilter);
});

sortBox.addEventListener("click", function () {
  dropdown(sortDropdown, iconUpSort, iconDownSort);
});

// Makes the Job cards drop down interactiive
document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.closest(".applicants-btn")) {
    const parent = target.closest(".applicants-container");
    const applicantsList = parent.querySelector(".applicant-list");

    dropdown(applicantsList);
  }
});

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const editJobCards = function (jobCard) {
  // Select elements
  const title = jobCard.querySelector(".job-title");
  const jobCategory = jobCard.querySelector(".job-category");
  const salaryRange = jobCard.querySelector(".salary-range");
  const location = jobCard.querySelector(".job-location");
  const type = jobCard.querySelector(".job-type");
  const description = jobCard.querySelector(".description");

  title.innerHTML = `<input type="text" class="edit-title light-text" value="${title.textContent}">`;
  jobCategory.innerHTML = `<input type="text" class="edit-category light-text" value="${jobCategory.textContent}">`;
  salaryRange.innerHTML = `<input type="text" class="edit-salaryRange light-text" value="${salaryRange.textContent}">`;
  location.innerHTML = `<input type="text" class="edit-location light-text" value="${location.textContent}">`;
  type.innerHTML = `<input type="text" class="edit-type light-text" value="${type.textContent}">`;
  description.innerHTML = `<input type="text" class="edit-description light-text" value="${description.textContent}">`;

  const editBtn = jobCard.querySelector(".edit-btn");
  editBtn.textContent = "Save";
  editBtn.setAttribute("data-mode", "save");
};

const saveChanges = function (jobCard) {
  const titleInput = jobCard.querySelector(".edit-title");
  const jobCategoryInput = jobCard.querySelector(".edit-category");
  const salaryRangeInput = jobCard.querySelector(".edit-salaryRange");
  const locationInput = jobCard.querySelector(".edit-location");
  const typeInput = jobCard.querySelector(".edit-type");
  const descriptionInput = jobCard.querySelector(".edit-description");

  jobCard.querySelector(".job-title").textContent = titleInput.value;
  jobCard.querySelector(".job-category").textContent = jobCategoryInput.value;
  jobCard.querySelector(".salary-range").textContent = salaryRangeInput.value;
  jobCard.querySelector(".job-location").textContent = locationInput.value;
  jobCard.querySelector(".job-type").textContent = typeInput.value;
  jobCard.querySelector(".description").textContent = descriptionInput.value;

  const editBtn = jobCard.querySelector("[data-mode='save']");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("data-mode", "edit");
};

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////  Errors    ///////////////////////////////////////////////
const addLowerCase = function (arr) {
  arr.forEach((el) => {
    const lowerEl = el.toLowerCase();
    if (!arr.includes(lowerEl)) arr.push(lowerEl);
  });
};

const errorHandler = function (jobCard) {
  const titleInput = jobCard.querySelector(".edit-title");
  const jobCategoryInput = jobCard.querySelector(".edit-category");
  const salaryRangeInput = jobCard.querySelector(".edit-salaryRange");
  const locationInput = jobCard.querySelector(".edit-location");
  const typeInput = jobCard.querySelector(".edit-type");
  const descriptionInput = jobCard.querySelector(".edit-description");
  const statusInput = jobCard.querySelector(".edit-status");

  if (!titleInput.value) {
    alert("Job Title cannot be Empty");
    return false;
  }

  if (!descriptionInput.value) {
    alert("Job description cannot be Empty");
    return false;
  }

  if (titleInput.value.length > 299) {
    alert("Title is to long");
    return false;
  }

  const salaryPattern =
    /^\$?\s*\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?\s*-\s*\$?\s*\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?\s*$/;

  if (!salaryPattern.test(salaryRangeInput.value)) {
    alert("Invalid salary format! Please enter a number or fixes spaces.");
    return false;
  }

  const typeInputs = [
    "Full-Time",
    "Part-Time",
    "Contractual",
    "Full Time",
    "Part Time",
    "PT",
    "FT",
    "CT",
  ];
  addLowerCase(typeInputs);
  if (!typeInputs.includes(typeInput.value)) {
    alert("Invalid job type");
    return false;
  }

  const locationInputs = ["Onsite", "Remote"];
  addLowerCase(locationInputs);

  if (!locationInputs.includes(locationInput.value)) {
    alert("Invalid location");
    return false;
  }
  return true;
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", function (e) {
  const target = e.target;
  const jobCard = target.closest(".job-cards");

  if (!jobCard) return;

  if (target.getAttribute("data-mode") === "edit") {
    editJobCards(jobCard);
  } else if (
    target.getAttribute("data-mode") === "save" &&
    errorHandler(jobCard)
  ) {
    saveChanges(jobCard);
  }
});
