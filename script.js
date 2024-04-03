var i = 0;
var txt = ` i am Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolores consequuntur animi incidunt quos error ex earum, praesentium
  velit eaque modi tempora quisquam officia ab fugit architecto
  molestias. Quia, modi voluptas.`; // The text you want to display
var speed = 25; // The speed/duration of the effect in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((navItem) => navItem.classList.remove("active"));
    this.classList.add("active");
  });
});
