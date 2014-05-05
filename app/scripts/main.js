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