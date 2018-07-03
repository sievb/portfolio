$(document).foundation()
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
				scrollTop: $(hash).offset().top - 70
			}, 800);
		}
	});

	$("#landing p").click(function() {
		parallaxInstance.destroy();
		$(this).text("Parallax disabled");
		$(this).addClass("noInteraction")
	});

	$(".orbit-caption a").hover(function() {
		$(".orbit-image").toggleClass("hover");
		$(".orbit-caption").toggleClass("hover");
		$(this).toggleClass("hover");
	})
});
