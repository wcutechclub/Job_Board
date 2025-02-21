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
                  //Function that gets the number of applicants
                  "100"
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
            <span class="btn cards-btn edit-btn">Edit</span>
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

displayJobs(data);

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
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Make Job Details Editable
const editJobCards = function (jobCard) {
  const title = jobCard.querySelector(".job-title");
  const jobCategory = jobCard.querySelector(".job-category ");
  const salaryRange = jobCard.querySelector(".salary-range");
  const location = jobCard.querySelector(".job-location");
  const type = jobCard.querySelector(".job-type");
  const description = jobCard.querySelector(".description");
  const status = jobCard.querySelector(".status");
};
// Event Delegation for Edit Button
document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.closest(".edit-btn")) {
  }
});

// Save the Edited Job Details
