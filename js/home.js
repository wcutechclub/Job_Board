"use strict";

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
const data = {
  title: "Software Development",
  catagory: "Information Technology",
  type: "Full-Time",
  salary: "70,000$ - 100,000$",
  location: "Remote",
  salaryType: "Fixed",
  description:
    "Develop and maintain user-facing | | features for a web application | | using React.js.",
};
const data1 = {
  title: "IS",
  catagory: "Information Technology",
  type: "Full-Time",
  salary: "70,000$ - 100,000$",
  location: "Remote",
  salaryType: "Fixed",
  description:
    "Develop and maintain user-facing | | features for a web application | | using React.js.",
};
const data2 = {
  title: "Health",
  catagory: "Health Care",
  type: "Full-Time",
  salary: "8,000$ - 10,000$",
  location: "On-Site",
  salaryType: "Fixed",
  description:
    "Develop and maintain user-facing | | features for a web application | | using React.js.",
};
const data3 = {
  title: "Accounting",
  catagory: "Information Technology",
  type: "Full-Time",
  salary: "70,000$ - 100,000$",
  location: "Remote",
  salaryType: "Fixed",
  description:
    "Develop and maintain user-facing | | features for a web application | | using React.js.",
};
const data4 = {
  title: "Front End Development",
  catagory: "Information Technology",
  type: "Full-Time",
  salary: "70,000$ - 100,000$",
  location: "Remote",
  salaryType: "Fixed",
  description:
    "Develop and maintain user-facing | | features for a web application | | using React.js.",
};

const dataArr = [data, data1, data2, data3, data4];

const displayJobs = function (data) {
  data.forEach(function (mov, i) {
    const html = `
  <div class="job-cards flex-col">
            <div class="flex-container">
              <span class="light-text date">Posted on</span>
              <span class="post-date date light-text">Dec 1</span>
            </div>
            <h2 class="job-title card-text">
             ${mov.title}
            </h2>
            <div class="flex-container">
              <span class="job-category card-text">${mov.catagory}</span>

              <div class="flex-container">
                <span class="card-text salary salary-type light-text"
                  >${mov.salaryType} -</span
                >
                <span class="salary-range salry card-text light-text"
                  > ${mov.salary}</span
                >
              </div>
            </div>
            <div class="flex-container">
              <div class="flex-container icon--text">
                <ion-icon class="cards-icon" name="location-outline"></ion-icon>
                <span class="job-location card-text">${mov.location}</span>
              </div>
              <div class="flex-container type">
                <span class="card-text type">Type -</span>
                <span class="job-type card-text">${mov.type}</span>
              </div>
            </div>

            <p class="description card-text">
            ${mov.description}
            </p>

            <a class="btn apply-btn" href="#">Apply</a>
          </div>
`;
    jobCard.insertAdjacentHTML("beforeend", html);
  });
};

displayJobs(dataArr);
