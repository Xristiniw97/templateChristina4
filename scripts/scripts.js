// FOR SUBMENUS IN MENU
let menuInputs = document.querySelectorAll(".mobile-nav input");

menuInputs.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("show");
  });
});
// FOR SUBMENUS IN MENU

// FOR MOBILE MENU
let menuBtn = document.querySelector(".menu-btn");
let menuOpen = document.querySelector(".mobile-nav-container");

menuBtn.addEventListener("click", () => {
  menuOpen.classList.toggle("openMenu");
  menuBtn.classList.toggle("active");
});

// FOR MOBILE MENU

// SWIPER CAROUSELS
var swiper1 = new Swiper(".experiencesSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper2 = new Swiper(".restoSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper3 = new Swiper(".testimonialsSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper4 = new Swiper(".awardsSwiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

var swiper5 = new Swiper(".experienceSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// SWIPER CAROUSELS

//CAROUSELS
// const bigCarousel = document.querySelector('#bigCarousel');
// const roomSlider = document.querySelector('#roomSlider');

// const carouselBig = new bootstrap.Carousel(bigCarousel, {
//   interval: 5000,
//   wrap: true,
//   touch: true,
//   ride: "carousel"
// });

// const carouselRooms = new bootstrap.Carousel(roomSlider, {
//   interval: false,
//   wrap: true,
//   ride: false
// });
//CAROUSELS

// Animations
AOS.init({});
// Animations

// FOR SCROLL TO TOP
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#d86f73 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// FOR SCROLL TO TOP
