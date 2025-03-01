const header = document.querySelector(".header");
const nav = document.querySelector(".nav-bar--container");
const main = document.querySelector(".main");
const btnScroll = document.querySelector(".scroll-btn");

// Sticky Nav
const navHeight = nav.getBoundingClientRect().height;
const stickNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);

// Reveal Sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

// Smooth Scroll
// btnScroll.addEventListener('click', function(e) {
//   const coords =
// })

document
  .querySelector(".nav-btns--container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-bar--btns")) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      const targetEl = document.querySelector(id);
      const targetPos = targetEl.offsetTop - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  });
