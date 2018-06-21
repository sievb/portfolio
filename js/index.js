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
$(document).ready(function(event) {
	$("a").on("click", function(event) {
		if(this.hash !== "") {
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 46
			}, 600);
		}
	});
});

var parallax = document.getElementById('landing');
var parallaxInstance = new Parallax(parallax);
