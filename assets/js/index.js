(function() {

    loginTimer();
	triggerInput();
	cardClick();
	// btnBack();
	btnFile();
	btnDel();
	btnDropdown();
})();

function loginTimer(){
  var timeoutID = window.setTimeout(function(){
      $("div.slogan").addClass("hide");
      $(".login-option").removeClass("hide").addClass("show");
  }, 1500);
}

function triggerInput(){

	for (var i = 0; i < $(".new-card li input").length; i++) {
		if ($(".new-card li input").eq(i).val()) {
			$(".new-card li input").eq(i).prev("span").removeClass("preset-span");
			// console.log(1);
		};
	}
	


	$(".new-card li input").focus(function() {
		$(this).prev("span").removeClass("preset-span");
	});
	$(".new-card li input").blur(function(){
		if ($(this).val() == '') {
			$(this).prev("span").addClass("preset-span");
		}
	});



	$(".new-card li input.add-list").focus(function() {
		$(this).parent().prev(".new-card-add").removeClass("preset-span");
		var tmp = $(this).parent().prev(".new-card-add").children(".preset-span-text");
		$(tmp).text($(tmp).attr("span-value-focus"));
	
		$(this).prev(".new-card-del").addClass("add-list-click");
		$(this).prev(".new-card-del").css('border-bottom-color', '#00ad96');

		$(this).parent('.add-list-focus').next('.after-span').show();
	});
	$(".new-card li input.add-list").blur(function(){
		if ($(this).val() == '') {
			$(this).parent().prev(".new-card-add").addClass("preset-span");
			var tmp = $(this).parent().prev(".new-card-add").children(".preset-span-text");
			$(tmp).text($(tmp).attr("span-value-blur"));

			$(this).prev(".new-card-del").removeClass("add-list-click");
			$(this).parent('.add-list-focus').next('.after-span').hide();

		}
		$(this).prev(".new-card-del").css('border-bottom-color', '#c9c9c9');
	});


}


function cardClick(){
	$('.main-card .card-info-click').click(function(event) {
		/* Act on the event */
		var dataValue = $(this).parents('.main-card').attr('card-value');
		var dataId = $(this).parents('.main-card').attr('data-id');
		console.log(dataValue);
		if (dataValue == 'add') {
			window.location.href =  'new_card.html';
		} else {
			// window.location.href = 'card_detail' + dataValue + '.html';
			window.location.href = 'card_detail.html?card=' + dataValue + '&id=' + dataId;
		}
	});
}

function btnBack(){
	$('.btn-back').click(function(event) {
		window.history.back();
	});
}

function btnFile(){
	$('.click-upload-file').on('click', function(e){
        e.preventDefault();
		$('.input-upload-file').click();
	});

}

function btnDel(){
	$('.new-card-del-icon').click(function(event) {
		var tmpList = $(this).parent().next('input.add-list')
		$(tmpList).val('');

		console.log(tmpList);

		$(tmpList).parent().prev(".new-card-add").addClass("preset-span");
		var tmp = $(tmpList).parent().prev(".new-card-add").children(".preset-span-text");
		$(tmp).text($(tmp).attr("span-value-blur"));

		$(tmpList).prev(".new-card-del").removeClass("add-list-click");
		$(tmpList).prev(".new-card-del").css('border-bottom-color', '#c9c9c9');
	});
}

function btnDropdown(){
	$('.new-card-del-text').click(function(event) {
		/* Act on the event */
		$('.new-card-dropdown').trigger('change'); 
		$('.new-card-dropdown').show(); 
		// $('.new-card-dropdown option').attr('selected', 'selected').parent().focus();
		// $(".new-card-dropdown option").parent().change();
	});
}

