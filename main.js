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
// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}

sr.reveal('.home__subtitle', {delay: 300})
sr.reveal('.home__profession', {delay: 400})
sr.reveal('.home__text', {delay: 500})
sr.reveal('.home__social-icon', {delay: 600, interval: 200})
// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
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

                                      
                                      

  
