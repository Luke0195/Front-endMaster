window.addEventListener('scroll', () =>{
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
});

function toggleMenu(){
  const menuHamburger = document.querySelector('.menu-toggle');
  menuHamburger.classList.toggle('active');
    
  const navegation = document.querySelector('.navigation')
  navegation.classList.toggle('active')
  
}