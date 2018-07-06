$(document).foundation()
$(document).ready(function () {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 600) {
        $("body").addClass("light");
      } else {
        $("body").removeClass("light");
      }
    }, false);
});
