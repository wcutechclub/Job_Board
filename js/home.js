"use strict";

const token = localStorage.getItem("authToken");
const userId = localStorage.getItem("userId");

if (!token) {
  alert("You need to log in!");
  window.location.href = "/login.html";
}

const dropdownType = document.querySelector(".dropdown-header__box-type");
const dropdownLocation = document.querySelector(
  ".dropdown-header__box-location"
);
const typeUpArrow = document.querySelector(".icon-up-type");
const typeDownArrow = document.querySelector(".icon-down-type");

const locationUpArrow = document.querySelector(".icon-up-location");
const locationDownArrow = document.querySelector(".icon-down-location");

const dropdownTypeContent = document.querySelector(".job-type__box-type");
const dropdownLocationContent = document.querySelector(
  ".job-type__box-location"
);

const jobCard = document.querySelector(".job-cards--container");

const searchInput = document.getElementById("search");

const logoutBtn = document.querySelector(".logout-btn");

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const toggleDropdown = function (btnUp, btnDown, dc) {
  btnUp.classList.toggle("icon-visible");
  btnDown.classList.toggle("icon-visible");
  dc.classList.toggle("job-type__box--active");
};

dropdownType.addEventListener("click", function () {
  console.log("Hi");

  toggleDropdown(typeUpArrow, typeDownArrow, dropdownTypeContent);
});
dropdownLocation.addEventListener("click", function () {
  toggleDropdown(locationUpArrow, locationDownArrow, dropdownLocationContent);
});

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const getJobs = async function (sourceLink) {
  fetch(sourceLink, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Failed to fetch this page");
    })
    .then((data) => {
      displayJobs(data);
    });
};

const displayJobType = (type) => {
  if (type === "CT") return "Contractual";
  if (type === "FT") return "Full Time";
  if (type === "PT") return "Part Time";
};

const displayJobs = function (data) {
  if (jobCard.innerHTML) {
    jobCard.innerHTML = "";
  }

  if (!data.length) {
    jobCard.insertAdjacentHTML(
      "beforeend",
      `<div class="invalid__job-container">
      <h2>Oops! No Jobs Found</h2 >
      <p>It looks We couldn't find any jobs matching your search.
      Try using different keywords or check our
      popular job categories for more options.
      </div > `
    );
    return;
  }

  data.forEach(function (job) {
    const html = `
  <div class="job-cards flex-col">
            <div class="flex-container">
              <span class="light-text date">Posted on</span>
              <span class="post-date date light-text">${job.created_at}</span>
            </div>
            <h2 class="job-title card-text">
             ${job.title}
            </h2>
            <div class="flex-container">
              <span class="job-category card-text">${job.job_category}</span>

              <div class="flex-container">
                <span class="card-text salary salary-type light-text"
                  >monthly -</span
                >
                <span class="salary-range salry card-text light-text"
                  > ${job.salary_range}</span
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
                <span class="job-type card-text">${displayJobType(
                  job.type
                )}</span>
              </div>
            </div>

            <p class="description card-text">
            ${job.description}
            </p>

            <a class="btn apply-btn" href="#">Apply</a>
          </div>
`;
    jobCard.insertAdjacentHTML("beforeend", html);
  });
};

// getJobs(displayJobs);
getJobs("http://localhost:8000/jobs/");

logoutBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  await fetch("http://localhost:8000/user/logout/", {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      localStorage.clear(token);
      localStorage.clear(userId);
      window.location.href = "index.html";
      return;
    }
    throw new Error("Faild to logout.");
  });
});

const searchQuery = document.getElementById("search");

searchQuery.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    getJobs(`http://localhost:8000/jobs?search=${this.value}`);
  }
});
