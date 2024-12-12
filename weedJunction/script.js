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
