// Cookies closing

const cookies = document.querySelector('.cookies');
const cookiesButton = document.querySelector('.cookies .main-btn');

closeCookies = () => {
    console.log(cookiesButton);
    cookies.classList.add('hidden');
};

cookiesButton.addEventListener('click', closeCookies);


//Carousel

const flkty = new Flickity( '.carousel', {
  wrapAround: true,
  autoPlay: true
});

