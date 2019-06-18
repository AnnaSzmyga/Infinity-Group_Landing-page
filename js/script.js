
// MOBILE NAVIGATION

const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

showMenu = () => {
    menu.classList.toggle('show');
};

mobileMenuButton.addEventListener('click', showMenu);
hamburgerIcon.addEventListener('click', showMenu);



// CLOSE COOKIES

const cookies = document.querySelector('.cookies');
const cookiesButton = document.querySelector('.cookies-btn');

closeCookies = () => {
    cookies.classList.add('hidden');
};

cookiesButton.addEventListener('click', closeCookies);


// CAROUSEL

const flkty = new Flickity( '.carousel', {
    wrapAround: true,
    autoPlay: true
});


// JUMP TO

//Show Jump-to buttons on scroll:

window.onscroll = function() {showJumpToOnScroll()};
const headerHeight = document.querySelector('.header').offsetHeight;

showJumpToOnScroll = () => {    
    if (document.documentElement.scrollTop > (0.5 * headerHeight)) {
        document.querySelector('.jump-to').style.display = "block";
    } else {
        document.querySelector('.jump-to').style.display = "none";
    }
};


