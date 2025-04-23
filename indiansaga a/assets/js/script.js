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
  