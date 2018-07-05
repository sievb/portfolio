$(document).ready(function () {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 600) {
        console.log("Scrolled past 500 pixels");
      }
    }, false);
});
