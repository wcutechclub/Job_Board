const filterBox = document.querySelector(".filter-dropdown--container");
const filterDropdown = document.querySelector(".filter-dropdown");

const sortBox = document.querySelector(".sort-dropdown--container");
const sortDropdown = document.querySelector(".sort-dropdown");

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const dropdown = function (btn) {
  btn.classList.toggle("dropdown__box--active");
};

filterBox.addEventListener("click", function () {
  dropdown(filterDropdown);
});

sortBox.addEventListener("click", function () {
  dropdown(sortDropdown);
});
