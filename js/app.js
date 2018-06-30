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
  if (!hasTouch()) {
    document.body.className += ' hasHover';
  };

  function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;
        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;
        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);
    enableHover();
  }
  watchForHover();

  function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
  }
  watchForHover();

	$("a").click(function() {
		if(this.hash !== "") {
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 75
			}, 800);
		}
	});

	buttons.click(function() {
		var index = buttons.index(this);
		var portfolio = $("#portfolio");
		var image = $("#imgContainer img");
		var title = $("#portfolio h2");
		var description = $("#portfolio p");
		var url = $("#portfolio a");

		$("button.current").removeClass("current");
		$(this).addClass("current");

		portfolio.fadeOut(200, function() {
			image.attr("src", "img/" + portfolioItems[index].img);
			title.text(portfolioItems[index].title);
			description.text(portfolioItems[index].desc);
			url.attr("href", window.location.origin + portfolioItems[index].url)
			portfolio.fadeIn(200);
		});
	});

	$("#imgContainer").change(function() {
		var selected = $(this).val();
		var image = $("#imgContainer img");
		image.fadeOut("fast", function() {
			image.attr('src', "img/" + portfolioItems[index].img);
			image.fadeIn("fast");
		});
	})

	$("#landing p").click(function() {
		parallaxInstance.destroy();
		$(this).text("Parallax disabled");
		$(this).addClass("noInteraction")
	});

	$("#portfolioText a").hover(function() {
		$("#portfolioText").toggleClass("hover");
		$("#portfolio img").toggleClass("hover");
		$(this).toggleClass("hover");
	})
});
