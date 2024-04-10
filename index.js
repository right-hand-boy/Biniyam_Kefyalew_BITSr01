const navigationItems = document.querySelectorAll(".navigation-item");
const slides = document.querySelectorAll(".project");
const project_images = document.querySelectorAll(".project-image");
let curSlide = 0;
const maxSlide = slides.length;

// handling clicked in navigation
navigationItems.forEach((item) => {
  item.addEventListener("click", function () {
    navigationItems.forEach((item) => item.classList.remove("active")); //  Remove active class from all items
    this.classList.add("active"); // Add active class to the clicked item
  });
});

//
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  project_images.forEach((image) => {
    image.classList.remove("active");
  });
  project_images[curSlide].classList.add("active");
  project_images[curSlide].scrollIntoView({ behavior: "smooth" });
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

// scrolling

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
