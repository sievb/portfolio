$(document).foundation();

$(document).ready(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 600) {
    $("body").addClass("light");
    $(".divider span").addClass("light");
  } else {
    $("body").removeClass("light");
    $(".divider span").removeClass("light");
  };

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
      $("body").addClass("light");
      $(".divider span").addClass("light");
    } else {
      $("body").removeClass("light");
      $(".divider span").removeClass("light");
    };
  });
});
