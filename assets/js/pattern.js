(function() {

	$(document).on('input change', '.color-slider', function() {
	    var tmpVal = $('.color-slider').val();
	    console.log(Math.floor(tmpVal/10));
	    switch (Math.floor(tmpVal/10)) {
		  case 1:
		    $('.pattern-show').attr('src', 'assets/images/pattern/work.jpg');
		    break;
		  case 2:
		    $('.pattern-show').attr('src', 'assets/images/pattern/social.jpg');
		    break;
		  case 3:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-24.jpg');
		    break;
		  case 4:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-18.jpg');
		    break;
		  case 5:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-15.jpg');
		    break;
		  case 6:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-12.jpg');
		    break;
		  case 7:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-11.jpg');
		    break;
		  case 8:
			$('.pattern-show').attr('src', 'assets/images/pattern/polygon-10.jpg');
		    break;
		  default:
		    $('.pattern-show').attr('src', 'assets/images/pattern/work.jpg');
		    break;
		}
	});
    
})();
