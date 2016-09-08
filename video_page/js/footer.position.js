$ = jQuery;
function setHeight() {
	var windowHeight = $(window).innerHeight(),
		containerHeight = $('.container').height();
	if ( windowHeight - containerHeight < 118 ) {
		$(".f-wrap").addClass('notSticky');
	} else {
		$(".notSticky").removeClass('notSticky');
	}
};
$(document).ready(function() {
	
	setHeight();
});
$(window).load(function() {
	setHeight();
});

/***************************/
/****Window Resize Event****/
/***************************/

var rtime;
var timeout = false;
var delta = 10;
$(window).resize(function() {
	rtime = new Date();
	if (timeout === false) {
		timeout = true;
		setTimeout(resizeend, delta);
	}
});

function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout(resizeend, delta);
	} else {
		timeout = false;
		setHeight();
	}
}

