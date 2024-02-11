var slides = document.getElementsByClassName("slides");
var currentSlide = 0;

function showSlide() {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[currentSlide].style.display = "block";

  // Update the current slide index
  currentSlide = (currentSlide + 1) % slides.length;
}

// Call the showSlide function every 3 seconds
setInterval(showSlide, 3000);