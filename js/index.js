var thumbnailArray = $('.portfolioImage');
var thumbnailImageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

var itemArray = $('.portfolioItem a');

$(document).ready(function() {
    for (i=0; i < thumbnailArray.length; i++) {
        thumbnailArray.eq(i).css("background-image", `url("../img/${thumbnailImageArray[i]}")`);
    }

    for (i=1; i < itemArray.length; i+=2) {
        itemArray.eq(i).css("justify-content", "flex-end");
    }

    switch (window.location.pathname.split('.').shift()) {
        case '/delete':
            $(".projectImage").css("background-image", 'url("../img/pic1.jpg")');
            break;

        case '/bloodworks':
            $(".projectImage").css("background-image", 'url("../img/pic2.jpg")');
            break;

        case '/journi':
            $(".projectImage").css("background-image", 'url("../img/pic3.jpg")');
            break;
    }
})

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}