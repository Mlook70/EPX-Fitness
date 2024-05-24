// Helper function to add event listeners to multiple elements
function addEventOnElem(elems, event, callback) {
  elems.forEach(elem => elem.addEventListener(event, callback));
}

// Navbar toggle Javascript
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
}

addEventOnElem(navLinks, "click", function() {
  // Remove 'active' class from all links
  navLinks.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  this.classList.add('active');

  // Close the navbar
  closeNavbar();
});

// Header & back to top button active state
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
