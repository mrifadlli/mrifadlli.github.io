
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

// Navbar
const hamber = document.querySelector('#hamber');


window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

    } else {
        header.classList.remove('navbar-fixed');
    }
};



hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

hamber.addEventListener('click', function() {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
});



