const navigationItems = document.querySelectorAll(".navigation-item");
const slides = document.querySelectorAll(".project");
const project_images = document.querySelectorAll(".project-image");
const biography = document.querySelector(".biography");
const maxSlide = slides.length;
let curSlide = 0;
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
// JavaScript code for sending email
// function sendEmail(event) {
//   event.preventDefault();

//   const formData = new FormData(document.querySelector(".contact-form-box"));

//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     subject: formData.get("subject"),
//     phone: formData.get("phone"),
//     message: formData.get("message"),
//   };

//   fetch("https://api.emailjs.com/api/v1.0/email/send", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       service_id: "YOUR_EMAILJS_SERVICE_ID",
//       template_id: "YOUR_EMAILJS_TEMPLATE_ID",
//       user_id: "YOUR_EMAILJS_USER_ID",
//       template_params: {
//         to_email: "biniyamkefyalew1@gmail.com",
//         from_name: data.name,
//         from_email: data.email,
//         subject: data.subject,
//         phone: data.phone,
//         message: data.message,
//       },
//     }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Error sending email. Please try again.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again later.");
//     });
// }
var i = 0;
var txt = ` i am Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolores consequuntur animi incidunt quos error ex earum, praesentium
  velit eaque modi tempora quisquam officia ab fugit architecto
  molestias. Quia, modi voluptas.`; // The text you want to display
var speed = 25; // The speed/duration of the effect in milliseconds
function sendEmail(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:biniyamkefyalew1@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nPhone Number: " +
        phone +
        "\n\nMessage: " +
        message
    );

  window.location.href = mailtoLink;
}
document
  .querySelector(".submit-button")
  .addEventListener("click", (e) => sendEmail(e));

// // auto typing effect on bio
function typeWriter() {
  if (i < txt.length) {
    biography.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
