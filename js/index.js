// function displayNavbar()
// {
//   var x = document.getElementById("topnav")
//   if (x.className === "navbar")
//   {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }
var parallax = document.getElementById('landing');
var parallaxInstance = new Parallax(parallax, {
	pointerEvents: true,
	hoverOnly: true
});

$(document).ready(function() {
	$("a").click(function() {
		if(this.hash !== "") {
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 50
			}, 800);
		}
	});

	$("#portfolioNav button").click(function() {
		$("#portfolioNav button.current").removeClass("current");
		$(this).addClass("current");
	});

	$("#landing p").click(function() {
			parallaxInstance.destroy();
			$(this).text("Parallax disabled");
			$(this).addClass("noInteraction")
	});

	$("#portfolioText a").hover(function() {
		$("#portfolioImg").toggleClass("hover");
		$("#portfolioText").toggleClass("hover");
		$(this).toggleClass("hover");
	})
});
