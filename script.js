// Get the navbar
const navbar = document.getElementById("navbar");

// Function to handle scroll event
window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
};
