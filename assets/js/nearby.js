(function() {

     var tmpHeight = $('.main-card').innerHeight();
    $('.main-card .avatar ').height(tmpHeight);

    cardClick();
})();



function cardClick(){
	$('.main-card').click(function(event) {
		/* Act on the event */
		window.location.href = 'beno.html'
	});
}