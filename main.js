window.addEventListener('scroll', onscroll)

onScroll()
function onScroll() {
  showNavOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)


}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  
  // verificar se a seção passou da linha

  //o topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alto

  const sectionTopReachOrPassedTargetline = targetLine 
  >= sectionTop


   // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo  
  const sectionEndPassedTargetline = sectionEndsAt <= 
  targetLine


  //limites da seção
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline && 
  !sectionEndPassedTargetline
  

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)
  
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')

  }

 

}
//showBackToTopButtonOnScroll()

function showNavOnScroll() {

  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
   navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

/*
function showBackToTopButtonOnScroll() {
   const backToTopButton = document.getElementById('backToTopButton');
  if(scrollY > 550){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
*/


function openMenu() {
document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card`);