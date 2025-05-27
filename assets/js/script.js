document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");
    const modal = new bootstrap.Modal(document.getElementById("timelineModal"));
    const modalBody = document.getElementById("timelineModalBody");
  
    // Show modal on timeline event click
    timelineEvents.forEach(event => {
      event.addEventListener("click", function () {
        const detail = event.getAttribute("data-detail");
        modalBody.textContent = detail;
        modal.show();
      });
    });
  
    // Filtering buttons
    const filterButtons = document.querySelectorAll("#filterButtons button");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Toggle active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        timelineEvents.forEach(event => {
          const period = event.getAttribute("data-period");
  
          if (filter === "all" || filter === period) {
            event.style.display = "inline-block";
          } else {
            event.style.display = "none";
          }
        });
      });
    });
  
    // Show/hide back to top button
    const backToTop = document.getElementById("backToTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  
    // Scroll to top when button clicked
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  // script.js

// Get the back to top button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Show button after scrolling 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scroll to top when button clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  function revealOnScroll() {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Reveal elements already in view
});
// Dark Mode Toggle Script with localStorage

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;

  // Apply dark mode from localStorage on page load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle function
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save the preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
