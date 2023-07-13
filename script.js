const lightModeIcon = document.querySelector("#light-mode-icon");
const button = document.querySelector("#mailSendButton");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const contactForm = document.querySelector("#contact-form");
var darkTheme = false;

function ToggleLightDarkMode() {
  darkTheme = !darkTheme;
  lightModeIcon.classList.toggle("bxs-sun");
  document.body.classList.toggle("dark-theme");
}

function ToggleMenuIcon() {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

function ScrollActiveHighlight() {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  header.classList.toggle("navbarLine", window.scrollY > 200);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Game Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

function SendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_csks0d8", "template_l4aoenf", params)
    .then(function (response) {
      if (response.status == 200) {
        button.innerText = "Message sent successfully";
        setTimeout(() => (button.textContent = "Send Message"), 5000);
      } else {
        button.innerText = "There was an error. Try again later";
        setTimeout(() => (button.textContent = "Send Message"), 5000);
      }
    });
}

lightModeIcon.addEventListener("click", ToggleLightDarkMode);
menuIcon.addEventListener("click", ToggleMenuIcon);
document.addEventListener("scroll", ScrollActiveHighlight);
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  SendMail();
});
