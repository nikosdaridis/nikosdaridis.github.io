// toggle light mode
let lightModeIcon = document.querySelector('#light-mode-icon');

lightModeIcon.onclick = function() {
    lightModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle("dark-theme");
}

// toggle menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections active highlight
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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

    // sticky navbar line
    let header = document.querySelector('header');

    header.classList.toggle('stickyLine', window.scrollY > 500);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Game Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Email.js
function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }

    if (params.from_name == "" || params.email_id == "" || params.message == "") {
        alert("Please fill out the form");
    } else {
        emailjs.send("service_csks0d8", "template_iqmu12m", params)
            .then(function (response) {
                alert("Your message sent successfully!");
            })
    }
}