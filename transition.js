document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    // Only animate internal links
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        // Ignore anchor links and new tabs
        if (link.target === "_blank" || link.href.includes("#")) return;
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = link.href;
        }, 300); // Match the CSS transition duration
      });
    }
  });
});