const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// scroll

window.onscroll = function( ){
    const navbar= document.querySelector('nav');
    const fixedNav = navbar.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav){
        navbar.classList.add('nav-scroll');
        toTop.classList.remove('hidden');
        toTop.classList.add('block');
    }
    else{
        navbar.classList.remove('nav-scroll');
        toTop.classList.remove('block');
        toTop.classList.add('hidden');
    }
};

// slider

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {                                                                                                                            
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });