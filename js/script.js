// Mobile navigation

const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

showMenu = () => {
    menu.classList.toggle('show');
};

mobileMenuButton.addEventListener('click', showMenu);
hamburgerIcon.addEventListener('click', showMenu);



// Cookies closing

const cookies = document.querySelector('.cookies');
const cookiesButton = document.querySelector('.cookies-btn');

closeCookies = () => {
    cookies.classList.add('hidden');
};

cookiesButton.addEventListener('click', closeCookies);


//Carousel

const flkty = new Flickity( '.carousel', {
  wrapAround: true,
  autoPlay: true
});

