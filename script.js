var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.opacity = "100%";
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
    navLinks.style.opacity = "0";
}