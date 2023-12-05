/*********************************************************
 *      js functions for MiataXpress website
 *      author: Antonio Cordero Molina
 *      version: 1.0
 *      date December 2023
 *      comment: functions for MiataXpress website
 * *******************************************************/

/********** JS NavBar Functions from @midudev JS Tutorial (Youtube) ***********/

// UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// event listers
allEventListners();

// functions of all event listers
function allEventListners() {

  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);

  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));

}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

/******** Gallery scripts form W3Schools *********/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}