"use strict";

const dropdown = document.querySelector(".dropdown-header__box");
const upArrow = document.querySelector(".icon-up");
const downArrow = document.querySelector(".icon-down");
const dropdownContent = document.querySelector(".job-type__box");

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

dropdown.addEventListener("click", function () {
  upArrow.classList.toggle("icon-visible");
  downArrow.classList.toggle("icon-visible");
  dropdownContent.classList.toggle("job-type__box--active");
});
