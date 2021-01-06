function  toggleMenu(){
  const navigation = document.querySelector('.navigation');
  if(navigation.classList.contains('active') == true){
    navigation.classList.remove('active');
  }else{
    navigation.classList.add('active');
  }
}

