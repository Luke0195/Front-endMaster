window.addEventListener('scroll', function(){
  const navigation = document.querySelector('.navigation');

  navigation.classList.toggle('sticky', scrollY > 0)
});