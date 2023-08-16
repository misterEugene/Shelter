// scroll header
window.addEventListener("scroll", function () {
  header = document.querySelector(".header");
  if (this.pageYOffset > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// burger menu
burger = document.querySelector(".burger-menu");
menu = document.querySelector(".menu");

burger.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("close");
}

// slider
previous = document.querySelector(".previous");
next = document.querySelector(".next");
sliderContent = document.querySelector(".slider_content");
count = sliderContent.childElementCount;
current = 0;
console.log(count);

previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);

function previousSlide() {
  if (current == 0) {
    current = count - 1;
  } else {
    current -= 1;
  }

  sliderContent.style.left = `calc(-${current}*360px)`;
}

function nextSlide() {
  if(current == count - 1) {
    current = 0
  } else {
    current += 1
  }

  sliderContent.style.left = `calc(-${current}*360px)`;
}
