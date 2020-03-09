// Navbar Functionallity
const navBar = document.querySelector('.navbar')
const navItems = document.querySelectorAll('.main-nav li')
const mainNav = document.querySelector('#js-menu');
const navBarToggle = document.querySelector('#js-navbar-toggle');

    // Mobile Toggle
navBarToggle.addEventListener('click', () => { mainNav.classList.toggle('active') });

    // Navbar Menu Active Item
function activeLink(){
    navItems.forEach(el => {
        el.classList.remove('active-link')
    })
    this.classList.add('active-link');
}

navItems.forEach(el => {
    el.addEventListener('click', activeLink)
})

    // Menu Scroll 
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navBar.classList.add('navbar-scrolled')
    }
    else {
        navBar.classList.remove('navbar-scrolled')
    }
})


// FAQ Functionallity 
const items = document.querySelectorAll('.faq-question')

function toggleAccordion() {
    // this.child.classList.to
    // this.children[0].classList.toggle('fa-angle-down');
    // this.children[0].classList.toggle('fa-angle-up');
    items.forEach(el => {
        el.classList.remove('active-question')
    })
    this.classList.toggle('active-question')
    this.nextElementSibling.classList.toggle('show');
}

items.forEach(el => {
    el.addEventListener('click', toggleAccordion)
});