const root = document.querySelector(":root");
const lightModeIcon = document.querySelector("#light-mode-icon");
const mailSendButton = document.querySelector("#mailSendButton");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const contactForm = document.querySelector("#contact-form");

setTheme(localStorage.getItem("nd-theme-mode"));

function setTheme(theme) {
  if (theme === "light") {
    localStorage.setItem("nd-theme-mode", "light");
    root.style.setProperty("--first-color", "#fafcff");
    root.style.setProperty("--second-color", "#f4f8ff");
    root.style.setProperty("--text-color", "#24282a");
    lightModeIcon.setAttribute("class", "bx bxs-moon");
  } else {
    // default dark
    localStorage.setItem("nd-theme-mode", "dark");
    root.style.setProperty("--first-color", "#24282a");
    root.style.setProperty("--second-color", "#2b353e");
    root.style.setProperty("--text-color", "#fafcff");
    lightModeIcon.setAttribute("class", "bx bxs-sun");
  }
}

function scrollActiveHighlight() {
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
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_csks0d8", "template_l4aoenf", params)
    .then(function (res) {
      mailSendButton.textContent = `${
        res.status === 200
          ? "Message sent successfully"
          : "There was an error. Try again later"
      }`;
      setTimeout(() => (mailSendButton.textContent = "Send Message"), 5000);
    });
}

lightModeIcon.addEventListener("click", function () {
  localStorage.getItem("nd-theme-mode") === "light"
    ? setTheme("dark")
    : setTheme("light");
});
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
document.addEventListener("scroll", scrollActiveHighlight);
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMail();
});
