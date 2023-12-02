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