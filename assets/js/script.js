'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */




function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function handleCounterAnimation() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;
  let animationSpeed = 5; // Adjust animation speed here (lower value = faster)

  valueDisplays.forEach((valueDisplay) => {
    if (isInViewport(valueDisplay)) {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, animationSpeed); // Use animationSpeed instead of duration for faster animation
    }
  });
}

window.addEventListener("scroll", handleCounterAnimation);

handleCounterAnimation(); // Run once on page load


window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");

  setTimeout(function() {
    preloader.classList.add("loaded");
  }, 1500);
});



