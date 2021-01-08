function menuToggle(){
  const menu = document.querySelector('.menu');
  const menuOpenend = document.querySelector('.menu-opened');
  menu.classList.toggle('active');
  menuOpenend.classList.toggle('active');
}