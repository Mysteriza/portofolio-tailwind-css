// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Slideshow portofolio
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const slideshow = this.querySelector(".slideshow-container");
    slideshow.classList.add("opacity-100");
    slideshow.classList.remove("opacity-0");

    let index = 0;
    const images = slideshow.querySelectorAll("img");
    const interval = setInterval(() => {
      images[index].classList.add("hidden");
      index = (index + 1) % images.length;
      images[index].classList.remove("hidden");
    }, 2000);

    this.addEventListener("mouseleave", function () {
      clearInterval(interval);
      slideshow.classList.add("opacity-0");
      slideshow.classList.remove("opacity-100");
      images.forEach((img) => img.classList.add("hidden"));
      images[0].classList.remove("hidden");
    });
  });
});

// Form Submission Handling
document
  .querySelector("#contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Validasi sederhana
    if (name && email && message) {
      // Menampilkan popup konfirmasi
      alert(`Thank you, ${name}! Your message has been sent.`);

      // Reset form
      this.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
