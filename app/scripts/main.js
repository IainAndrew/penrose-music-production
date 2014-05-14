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
	function navWaypoints(section, scrollClass, newColor, oldColor) {
		section.waypoint(function(direction) {
			if (direction === "down") {
				$(".navbar-default").addClass(scrollClass);
				$(".navbar-nav li a").css("color", newColor);
			} else if (direction === "up") {
				$(".navbar-default").removeClass(scrollClass);
				$(".navbar-nav li a").css("color", oldColor);
			}
		});
	}
}

navWaypoints( $(".about-us"), "navbar-scroll-about", "black", "white" );
navWaypoints( $(".services-rates"), "navbar-scroll-services", "white", "black" );
navWaypoints( $(".our-sounds"), "navbar-scroll-sounds", "black", "white" );

function scrollTo (click, goto) {
	click.click(function() {
	    $('html, body').animate({scrollTop:goto.offset().top}, 300);
	    return false;
	});
}

scrollTo( $(".scroll-down"), $(".about-us") );
scrollTo( $("#nav-about"), $(".about-us") );
scrollTo( $("#nav-services"), $(".services-rates") );
scrollTo( $("#nav-sounds"), $(".our-sounds") );
scrollTo( $("#nav-contact"), $(".footer") );


$(".our-sounds").waypoint(function(direction) {
	if (direction === "down") {
		$(".footer").show();
	} else if (direction === "up") {
		$(".footer").hide();
	}
});