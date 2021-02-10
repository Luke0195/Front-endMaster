AOS.init({
 duration: 3000
})


function menuToogle(){ 
  const menuHamburger = document.querySelector('.nav-content');
  const menu = document.querySelector('.menu-hamburger');
  menuHamburger.classList.toggle('nav-content-active')
  menu.classList.toggle('change-icon')
}