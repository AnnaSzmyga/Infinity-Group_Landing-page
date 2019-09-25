
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
const jumpToButton = document.querySelector('.jump-to');

showJumpToOnScroll = () => {
    if (document.documentElement.scrollTop > (0.5 * headerHeight)) {
        jumpToButton.style.display = "block";
    } else {
        jumpToButton.style.display = "none";
    }
};


// Jump-to buttons feature

const sections = document.querySelectorAll('[data-jump-to]');
const sectionsNames = [...sections].map((section) => section.dataset.jumpTo);

const jumpUpButton = document.querySelector('.jump-up');
const jumpDownButton = document.querySelector('.jump-down');

let currentSection = 'home';
let previousSection;
let nextSection;

const changeHrefs = () => {
    jumpUpButton.setAttribute("href", `#${previousSection}`);
    jumpDownButton.setAttribute("href", `#${nextSection}`);
}

const setCurrentSection = () => {
    sections.forEach((section) => {

        // check if section is in viewport
        const sectionCoordinates = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const { top, bottom } = sectionCoordinates;

        if (
            (top >= 0) && (bottom < viewportHeight) /* when section hight is less than viewport height */
            /* when section is higher than viewport */
            || ((top < 0) && (bottom > 0.5 * viewportHeight) && (bottom < viewportHeight))
            || ( (top < 100) && (top > 0) && (bottom > viewportHeight) )
            || ( (top < 0) && (bottom > viewportHeight) )
        ) {
            currentSection = section.dataset.jumpTo;
        }
    })
    const currentSectionIndex = sectionsNames.indexOf(currentSection);
    previousSection = currentSectionIndex > 0 ? sectionsNames[currentSectionIndex - 1] : currentSection;
    nextSection = currentSectionIndex < (sectionsNames.length - 1) ? sectionsNames[currentSectionIndex + 1] : currentSection;
}
const checkSection = () => {
    setCurrentSection();
    changeHrefs();
}
checkSection();

window.addEventListener('scroll', checkSection);




