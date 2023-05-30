const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
const headerBurgerClouse = document.querySelector('.header__burger-clouse')
const body = document.body


if (headerMenu && headerBurger){
   headerBurger.addEventListener('click', () => {
      headerMenu.classList.toggle('active')
      body.classList.toggle('lock')
   })

   headerBurgerClouse.addEventListener('click', () => {
      headerMenu.classList.remove('active')
      body.classList.remove('lock')
   })

   headerMenu.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
         headerMenu.classList.remove('active')
         body.classList.remove('lock') 
      })
   }) 
}