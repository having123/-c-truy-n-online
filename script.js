let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar-after');

menu.onclick = () =>{
  navbar.classList.toggle('open');
  if (navbar.classList.contains('open')) {
    document.body.style.backgroundColor = 'gray';
  } else {
    document.body.style.backgroundColor = ''; 
  }
};

document.querySelector('.search-icon').onclick = () =>{
    document.querySelector('.search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () =>{
    document.querySelector('.search-form').classList.remove('active');
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
  delay: 10000,
  disableOnInteraction: false
  },
  speed: 100,
  pagination: {
  el: ".swiper-pagination",
  clickable: true
  },
  on: {
  slideChangeTransitionStart: function () {
      $('.slide1').hide(0);
      $('.slide2').hide(0);
      $('.slide-wrapp').hide(0);
      $('.slide1').removeClass('aos-init').removeClass('aos-animate');
      $('.slide2').removeClass('aos-init').removeClass('aos-animate');
      $('.slide-wrapp').removeClass('aos-init').removeClass('aos-animate');
  
  },
  slideChangeTransitionEnd: function () {
      $('.slide1').show(0);
      $('.slide2').show(0);
      $('.slide-wrapp').show(0);
      AOS.init();
  },
  } ,
}); 
AOS.init(); 


let formBoxLogin = document.querySelector('.form-box-login');
let registerLink = document.querySelector('.register-link');
let loginLink= document.querySelector('.login-link');

registerLink.addEventListener('click', ()=> {
  formBoxLogin.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  formBoxLogin.classList.remove('active');
});

const LoginBtn = document.querySelector('.header-login-btn');
const wrapped = document.querySelector('.wrapped');
const closeBtn = document.querySelector('.close');

LoginBtn.addEventListener ('click', ()=>{
  wrapped.classList.add('active');
});

closeBtn.addEventListener ('click', ()=>{
  wrapped.classList.remove('active');
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
