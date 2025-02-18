const filterBox = document.querySelector(".filter-dropdown--container");
const filterDropdown = document.querySelector(".filter-dropdown");

const sortBox = document.querySelector(".sort-dropdown--container");
const sortDropdown = document.querySelector(".sort-dropdown");

const iconUpFilter = document.querySelector(".icon-up-filter");
const iconDownFilter = document.querySelector(".icon-down-filter");
const iconUpSort = document.querySelector(".icon-up-sort");
const iconDownSort = document.querySelector(".icon-down-sort");
// Card
const statusContent = document.querySelector(".status");

// Applicants
const numApplicants = document.querySelector(".num-applicants");
const applicantsBtn = document.querySelector(".applicants-btn");
const applicantsList = document.querySelector(".applicant-list");

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const dropdown = function (dropdownBtn, iconUp, iconDown) {
  dropdownBtn.classList.toggle("dropdown__box--active");
  iconUp.classList.toggle("hide-icon");
  iconDown.classList.toggle("hide-icon");
};

const statusChangeColor = function () {
  if (statusContent.textContent === "Active") {
    statusContent.classList.add("status-active");
    statusContent.classList.remove("status-close");
    return;
  } else statusContent.classList.remove("status-active");
  statusContent.classList.add("status-close");
  return;
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
filterBox.addEventListener("click", function () {
  dropdown(filterDropdown, iconUpFilter, iconDownFilter);
});

sortBox.addEventListener("click", function () {
  dropdown(sortDropdown, iconUpSort, iconDownSort);
});

applicantsBtn.addEventListener("click", function () {
  dropdown(applicantsList);
});

statusChangeColor();
