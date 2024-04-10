const navigationItems = document.querySelectorAll(".navigation-item");

navigationItems.forEach((item) => {
  item.addEventListener("click", function () {
    navigationItems.forEach((item) => item.classList.remove("active"));
    / Remove active class from all items /;
    this.classList.add("active");
    / Add active class to the clicked item /;
  });
});
console.log("ben");
//
const animationElement = document.querySelector(".basic-detail");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animationElement.classList.add("animation-visible");
    } else {
      animationElement.classList.remove("animation-visible");
    }
  });
});
