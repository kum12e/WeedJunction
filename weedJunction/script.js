const mobileMenuIcon = document.getElementById('mobile');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
const modal = document.getElementById('modal');

if (mobileMenuIcon && navbar) {
    mobileMenuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

if (close && modal) {
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll("#navbar li a");
    const currentPath = window.location.pathname;

    navbarLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath.split('/').pop()) {
            link.classList.add("active");
        }
    });
});
