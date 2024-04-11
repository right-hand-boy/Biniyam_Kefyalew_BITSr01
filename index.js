const navigationItems = document.querySelectorAll(".navigation-item");
const slides = document.querySelectorAll(".project");
const project_images = document.querySelectorAll(".project-image");
const biography = document.querySelector(".biography");
const header = document.querySelector(".hero-section");
const nav = document.querySelector(".navigation");
const navHeight = nav.getBoundingClientRect().height;
const contact_button = document.querySelector(".btn_1");
const more_button = document.querySelector(".btn_2");
const menu_button = document.querySelector(".menu-button");
const menu_box = document.querySelector(".menu-box");
const menu_items = document.querySelectorAll(".menu-item");
const close_btn = document.querySelector(".close");

var txt = ` 
Following my academic endeavors, I ventured into the professional realm, where I
 have had the privilege of working on diverse projects across various domains.
  Whether it's developing scalable web applications, designing efficient algorithms,
 or troubleshooting complex technical issues, I thrive on challenges that push the boundaries of innovation.
Beyond my professional endeavors.`;
const maxSlide = slides.length;
var speed = 25; // The speed/duration of the effect in milliseconds
var i = 0;
let curSlide = 0;

//////////////////////////////
///////////Hero///////////////
//////////////////////////////

// handling click on contact button
contact_button.addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// handling click on more button
more_button.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////
///////////Navigation/////////
//////////////////////////////
function scroler(scrol) {
  window.scrollTo({
    left: scrol.left + window.pageXOffset,
    top: scrol.top + window.pageYOffset - navHeight,
    behavior: "smooth",
  });
}
// scrolling when navigation item click
navigationItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    const component = document.getElementById(`${e.target.dataset.scroll}`);
    const scrol = component.getBoundingClientRect();
    // scrollTo.scrollIntoView({ behavior: "smooth" });
    scroler(scrol);
  });
});
menu_items.forEach((item) => {
  item.addEventListener("click", function (e) {
    const component = document.getElementById(`${e.target.dataset.scroll}`);
    const scrol = component.getBoundingClientRect();
    // scrollTo.scrollIntoView({ behavior: "smooth" });
    scroler(scrol);
    if (!menu_box.classList.toggle("hidden")) {
      menu_box.classList.add("hidden");
    }
  });
});
// menu botton
menu_button.addEventListener("click", function () {
  menu_box.classList.toggle("hidden");
});

// handling esc key

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menu_box.classList.add("hidden");
  }
});

// handling close button key
close_btn.addEventListener("click", function (e) {
  menu_box.classList.add("hidden");
});
///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////////////////////
///////////Biography/////////
//////////////////////////////

// // auto typing effect on bio
function typeWriter() {
  if (i < txt.length) {
    biography.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

//////////////////////////////
///////////Portfolio/////////
//////////////////////////////

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  project_images.forEach((image) => {
    image.classList.remove("active");
  });
  project_images[curSlide].classList.add("active");
  // project_images[curSlide].scrollIntoView({ behavior: "smooth" });
};
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// intialiazing
goToSlide(curSlide);

// handling clicked in project image
project_images.forEach((image, index) =>
  image.addEventListener("click", function (e) {
    curSlide = index;
    goToSlide(curSlide);
  })
);
// handling clicked arrow key
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
