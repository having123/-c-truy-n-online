
// let formBoxLogin = document.querySelector('.form-box-login');
// let registerLink = document.querySelector('.register-link');
// let loginLink= document.querySelector('.login-link');

// registerLink.addEventListener('click', ()=> {
//   formBoxLogin.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//   formBoxLogin.classList.remove('active');
// });

// const LoginBtn = document.querySelector('.header-login-btn');
// const wrapped = document.querySelector('.wrapped');
// const closeBtn = document.querySelector('.close');

// LoginBtn.addEventListener ('click', ()=>{
//   wrapped.classList.add('active');
// });

// closeBtn.addEventListener ('click', ()=>{
//   wrapped.classList.remove('active');
// });


// let menu = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar-after');

// menu.onclick = () =>{
//   navbar.classList.toggle('open');
//   if (navbar.classList.contains('open')) {
//     document.body.style.backgroundColor = 'gray';
//   } else {
//     document.body.style.backgroundColor = ''; 
//   }
// };

// document.querySelector('.search-icon').onclick = () =>{
//     document.querySelector('.search-form').classList.toggle('active');
// };

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('.search-form').classList.remove('active');
// };




var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
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
  