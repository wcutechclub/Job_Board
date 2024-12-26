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
