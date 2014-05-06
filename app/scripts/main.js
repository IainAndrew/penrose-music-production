$(function() {
	$(".enda a").hover(function() {
		$(".read-more-enda").stop().animate({opacity:1}, {duration:500});
	}, function() {
		$(".read-more-enda").stop().animate({opacity:0}, {duration:500});
	});
	$(".ben a").hover(function() {
		$(".read-more-ben").stop().animate({opacity:1}, {duration:500});
	}, function() {
		$(".read-more-ben").stop().animate({opacity:0}, {duration:500});
	});
});

if (window.innerWidth > 768) {
	$('.about-us').waypoint(function(direction) {
		if (direction === "down") {
			$(".navbar-default").addClass("navbar-scroll-about");
			$(".navbar-nav li a").css("color", "#424242");
		} else if (direction === "up") {
			$(".navbar-default").removeClass("navbar-scroll-about");
			$(".navbar-nav li a").css("color", "#FBF7E4");
		}
	});
	$('.services-rates').waypoint(function(direction) {
		if (direction === "down") {
			$(".navbar-default").addClass("navbar-scroll-services");
		} else if (direction === "up") {
			$(".navbar-default").removeClass("navbar-scroll-services");
		}
	});
}