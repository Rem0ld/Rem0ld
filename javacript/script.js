// Get the menu button and the navbar
let btn = document.getElementById("button-navbar");
let navbar = document.getElementsByClassName("navbar");
// Get the 3 elements of the form to empty them
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("textarea");

document.addEventListener("DOMContentLoaded", function () {
  name.value = "";
  email.value = "";
  subject.value = "";
});

// Get all the parts of the page
const home = document.getElementById("home");
const about = document.getElementById("about");
const resume = document.getElementById("resume");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const sections = [home, about, resume, portfolio, contact];

const menu = document.getElementsByClassName("navbar-element");

const openMenu = (element, nav) => {
  element.className = "btn-open";
  nav.className = " navbar slidein-menu";
};
const closeMenu = (element, nav) => {
  element.className = "btn-close";
  nav.className = " navbar slideout-menu";
};
// Listening for clicks on menu button or outside of the box
document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement === btn) {
      if (btn.className === "btn-close") {
        openMenu(btn, navbar[0]);
      } else {
        closeMenu(btn, navbar[0]);
      }
      return;
    } else if (targetElement === navbar[0]) {
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside the navbar or the button
  if (btn.className === "btn-open") {
    closeMenu(btn, navbar[0]);
  }
});
// Event listener on menu + show the right piece of the page
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    const item = menu[i].textContent.trim().toLowerCase();
    const section = document.getElementById(item);
    let itemToHide = sections.filter(
      (element) => !element.className.includes("hidden")
    );
    itemToHide[0].classList.toggle("hidden");
    section.classList.toggle("hidden");
    section.classList.add("slidein");
  });
}
