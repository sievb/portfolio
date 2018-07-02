$(document).foundation()
var portfolioItems = [
	{
		img: "deleteYourself.png",
		title: "Delete Yourself",
		desc: "A website dedicated to helping visitors practice good online habits, as well as taking control of their online presence",
		url: "deleteYourself.html"
	},
	{
		img: "zoldo.png",
		title: "Fable of Zoldo",
		desc: "A Legend of Zelda parody that attempts to get players to question why they play games by introducing absurdist aspects",
		url: "zoldo.html"
	},
	{
		img: "puzzle.png",
		title: "Puzzle Spectrum",
		desc: "An app to help demystify autism and the autism spectrum by providing basic information and adding a more human focus",
		url: "puzzle.html"
	}
]

var buttons = $("#portfolioNav button");

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
