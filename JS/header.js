document.addEventListener("DOMContentLoaded", function () {
  fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
  });
  let slideIndex = 0;
  let slides = document.querySelectorAll(".mySlides");

  function showSlides(n, direction) {
      slides.forEach(slide => {
          slide.classList.remove("active", "prev-slide", "next-slide");
      });

      let prevIndex = slideIndex;
      slideIndex = (n + slides.length) % slides.length;

      slides[prevIndex].classList.add(direction === "next" ? "prev-slide" : "next-slide");
      slides[slideIndex].classList.add("active");
  }

  function plusSlides(n) {
      let direction = n > 0 ? "next" : "prev";
      showSlides(slideIndex + n, direction);
  }

  // Attach event listeners
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));

  // Initialize first slide
  slides[slideIndex].classList.add("active");
});
