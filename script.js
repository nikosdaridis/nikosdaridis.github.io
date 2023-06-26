const lightModeIcon = document.querySelector('#light-mode-icon');
const button = document.getElementById("mailSendButton");
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
let darkTheme = false;

// Toggle Light / Dark Mode
lightModeIcon.onclick = function () {
    darkTheme = !darkTheme;;
    lightModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-theme');
}

// Toggle Menu Econ Navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll Sections Active Highlight
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Navbar Line
    header.classList.toggle('navbarLine', window.scrollY > 200);

    // Remove Toggle Icon And Navbar When Click Navbar Link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Game Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Email.js
function SendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_csks0d8", "template_l4aoenf", params)
        .then(function (response) {
            if (response.status == 200) {
                button.innerText = "Message Sent Successfully";
                setTimeout(() => button.innerText = "Send Message", 6000);
            } else {
                button.innerText = "Something Went Wrong, Try Again";
                setTimeout(() => button.innerText = "Send Message", 6000);
            }
        })
}