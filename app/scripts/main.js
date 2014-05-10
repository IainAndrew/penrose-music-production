/*$(function() {
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
});*/

function readMore (link, readmore) {
	link.hover(function() {
		readmore.stop().animate({opacity:1}, {duration:500});
	}, function() {
		readmore.stop().animate({opacity:0}, {duration:500});
	});
};

readMore( $(".enda a"), $(".read-more-enda") );
readMore( $(".ben a"), $(".read-more-ben") );

if (window.innerWidth > 768) {
	$('.about-us').waypoint(function(direction) {
		if (direction === "down") {
			$(".navbar-default").addClass("navbar-scroll-about");
			$(".navbar-nav li a").css("color", "black");
		} else if (direction === "up") {
			$(".navbar-default").removeClass("navbar-scroll-about");
			$(".navbar-nav li a").css("color", "white");
		}
	});
	$('.services-rates').waypoint(function(direction) {
		if (direction === "down") {
			$(".navbar-default").addClass("navbar-scroll-services");
			$(".navbar-nav li a").css("color", "white");
		} else if (direction === "up") {
			$(".navbar-default").removeClass("navbar-scroll-services");
			$(".navbar-nav li a").css("color", "black");
		}
	});
}
$(".our-sounds").waypoint(function(direction) {
	if (direction === "down") {
		$(".footer").show();
	} else if (direction === "up") {
		$(".footer").hide();
	}
});