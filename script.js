// scroll-animations.js
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");

  // Set up Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add .show class to trigger the CSS transition
          entry.target.classList.add("show");
          // Once shown, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // Observe each hidden element
  hiddenElements.forEach((el) => observer.observe(el));
});
