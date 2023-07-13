const openNav = document.getElementById('open');
const mobileNav = document.getElementById('sec-nav');


openNav.addEventListener('click', ()=> {
  openNav.classList.toggle('fa-close');
  mobileNav.classList.toggle('opened');
  document.body.classList.toggle('fixed');
})


