/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__subtitle', {delay: 300})
sr.reveal('.home__profession', {delay: 400})
sr.reveal('.home__text', {delay: 500})
sr.reveal('.home__social-icon', {delay: 600, interval: 200})

/*SCROLL PROGRAMS*/
sr.reveal('.programs__subtitle', {})
sr.reveal('.programs__name', {distance: '20px', delay: 50, interval: 100})

/*SCROLL BLOG*/
sr.reveal('.blog__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*slider */
const imageIndex = 1

 

const sliderImg = document.querySelector("#home_slider__img)
const nextImageBtn = document.querySelector("#nextImgBtn) 
const prevImageBtn = document.querySelector("#prevImgBtn) 

 function nextImage() {
    if(imageIndex === 4) {
     imageIndex = 1
    }else{
     imageIndex+1    
    }
    
    
 }

function prevImage() {
     if(imageIndex === 1) {
      imageIndex = 4
    }else {
      imageIndex-1
    }
    
 }

nextImageBtn.addEventListener('click', nextImage())
prevImageBtn.addEventListener('click', prevImage())

sliderImg.serc = `./${imageIndex}.jpg`                                         
                                      

  
