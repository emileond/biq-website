// Navbar Functionallity
const navBar = document.querySelector('.navbar')
const navItems = document.querySelectorAll('.main-nav li')
const mainNav = document.querySelector('#js-menu');
const navBarToggle = document.querySelector('#js-navbar-toggle');

    // Mobile Toggle
navBarToggle.addEventListener('click', () => { mainNav.classList.toggle('active') });

    // Navbar Menu Active Item
function activeLink(){
    navItems.forEach(el => {
        el.classList.remove('active-link')
    })
    this.classList.add('active-link');
}

navItems.forEach(el => {
    el.addEventListener('click', activeLink)
})

    // Menu Scroll 
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navBar.classList.add('navbar-scrolled')
    }
    else {
        navBar.classList.remove('navbar-scrolled')
    }
})

// Back to Top Button
const btnBackToTop = document.querySelector('#backTop')

window.onscroll = function() {scrollToTop()};
function scrollToTop(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    btnBackToTop.classList.add('show-btn');
}
else {
    btnBackToTop.classList.remove('show-btn');

  }
}

function topBtn(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

// FAQ Functionallity 
const items = document.querySelectorAll('.faq-question')

function toggleAccordion() {
    // this.child.classList.to
    // this.children[0].classList.toggle('fa-angle-down');
    // this.children[0].classList.toggle('fa-angle-up');
    this.nextElementSibling.classList.toggle('show');
}

items.forEach(el => {
    el.addEventListener('click', toggleAccordion)
});

// FORM (MULTI STEP)
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Enviar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("list-group-item")[currentTab].className += " completed";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("list-group-item");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
} 