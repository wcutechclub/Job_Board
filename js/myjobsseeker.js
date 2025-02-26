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

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Styles //////////////////////////////////////////////////////////////
const dropdown = function (dropdownBtn, iconUp, iconDown) {
  dropdownBtn.classList.toggle("dropdown__box--active");
  iconUp.classList.toggle("hide-icon");
  iconDown.classList.toggle("hide-icon");
};

const statusChangeColor = function (statusContent) {
  if (statusContent) {
    if (statusContent.textContent === "Accepted") {
      statusContent.classList.remove("status-reject");
      statusContent.classList.remove("status-pen");
      statusContent.classList.add("status-accept");
    }
    if (statusContent.textContent === "Rejected") {
      statusContent.classList.remove("status-accept");
      statusContent.classList.remove("status-pen");
      statusContent.classList.add("status-reject");
      return;
    }

    if (statusContent.textContent === "Pending") {
      statusContent.classList.remove("status-accept");
      statusContent.classList.remove("status-reject");
      statusContent.classList.add("status-pen");
      return;
    }
  }
};

// Change the background color of the status
const statusContent = document.querySelector(".status");
console.log(statusContent.textContent);
// const newStatus = jobCard.lastElementChild.querySelector(".status");
statusChangeColor(statusContent);
