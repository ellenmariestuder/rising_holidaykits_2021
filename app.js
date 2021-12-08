// show/ hide content to right of menu on button click 
// (for desktop-size screens)
var divs = ["projects", "skills", "about", "contact"];
var divsAcc = ["projects-acc", "skills-acc", "about-acc", "contact-acc"];
var visibleDivId = null;
var styles
var navLinks = document.querySelectorAll(".nav-link");

function toggleVisibility(divId) {
  // identify navLink clicked on 
  navId = document.getElementById(window.event.target.id);
  // add 'active' class to that navLink; remove it from all others 
  setActiveClass(navId);

  // if current visibledivid doesn't match divid that was just clicked, 
  // set visibiledivid to null
  if (visibleDivId === divId) {
    visibleDivId = null;
    // add bouncy class to nav links here
    [].forEach.call(navLinks, function (element) {
      element.classList.add("bouncy");
    });

    // set visibiledivid to divid that was just clicked
  } else {
    visibleDivId = divId;
    // remove bouncy class from navlinks 
    [].forEach.call(navLinks, function (element) {
      element.classList.remove("bouncy");
    });
  }

}

function setActiveClass(elem) {
  for (i = 0; i < navLinks.length; i++) {
    // remove active class from everything else
    navLinks[i].classList.remove("active");
  }
  // add active class to thing i've clicked on
  elem.classList.add("active");
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.cssText = `
      display: block;
      `;

    } else {
      div.style.display = "none";
    }
  }
}

function hideNonVisibleDivsMobile() {
  var i, divId, div;
  for (i = 0; i < divsAcc.length; i++) {
    divId = divsAcc[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.cssText = `
      display: block;
      `;

    } else {
      div.style.display = "none";
    }
  }
}