let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Update active dot
    dots[slideIndex].classList.add('active');
    
    // Move to the correct slide
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    // Go to the next slide, looping back to start if needed
    slideIndex = (slideIndex + 1) % dots.length;
}

// Automatically switch slides every 1.5 seconds
setInterval(showSlides, 1500);

// Initialize the first slide display
showSlides();


//chilly page css//
  const sliderTrack = document.getElementById("slider-track-chilly");
  const leftBtn = document.querySelector(".left-btn-chilly");
  const rightBtn = document.querySelector(".right-btn-chilly");

  let isPaused = false;

  // Pause on hover
  sliderTrack.addEventListener("mouseenter", () => {
    isPaused = true;
    sliderTrack.classList.add("paused");
  });

  sliderTrack.addEventListener("mouseleave", () => {
    isPaused = false;
    sliderTrack.classList.remove("paused");
  });

  // Manual Scroll with buttons
  leftBtn.addEventListener("click", () => {
    sliderTrack.scrollLeft -= 220;
  });

  rightBtn.addEventListener("click", () => {
    sliderTrack.scrollLeft += 220;
  });

  // Optional: Repeated seamless scroll for non-CSS fallback (if animation disabled)
  // Uncomment this block only if you're not using CSS animation
  setInterval(() => {
    if (!isPaused) {
      sliderTrack.scrollLeft += 1;
      if (sliderTrack.scrollLeft >= sliderTrack.scrollWidth / 2) {
        sliderTrack.scrollLeft = 0;
      }
    }
  }, 20);













