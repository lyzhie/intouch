(function() {
	triggerNote();
})();

function triggerNote(argument) {
	$('.card-detail-top').click(function(event) {
		/* Act on the event */
		$('.card-detail-top').animate({opacity:0}, 100);
		$('.labels-note-active').animate({top: 0, opacity: 1}, 200);
	});
	$('.labels-note-active').click(function(event) {
		/* Act on the event */
		$('.labels-note-active').animate({top: 260, opacity: 0}, 200);
		$('.card-detail-top').animate({opacity:1}, 400);
		
	});
}