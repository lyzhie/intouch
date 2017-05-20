$(document).ready(function(){
  swipeGroup();
  contactScroll();
});


function swipeGroup(){
  var mc = new Hammer( $( ".contacts-list" )[ 0 ], {
      domEvents: true,
      angle: 90
    } );

    mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    var swipeWidth = $('.swipe-group').width();
    $('.swipe-group').on('swipeleft panleft', function(event){
      $('.contacts-list-main').animate({'margin-left': -swipeWidth+20},100);
      $('.swipe-group').animate({'left': -swipeWidth+20},100);
      $('.btn-edit').removeClass('btn-edit-active');
      $('.swipe-group>div').css('overflow-y', 'hidden');
      })
  $('.swipe-group').on('swiperight panright', function(event){
    $('.contacts-list-main').animate({'margin-left': 0},100);
    $('.swipe-group').animate({'left': 0},100);
    $('.btn-edit').addClass('btn-edit-active');
    $('.swipe-group>div').css('overflow-y', 'auto');
  })
  
}

function contactScroll(){
  $(".alphabet-list li").click(function(){
      var toLetter = $(this).attr('class');
      console.log(toLetter);
      var offset = $('#'+toLetter).offset();
      console.log(offset);
           $('html, body').animate({
            scrollTop: offset.top-92
        }, 500);
    })
}
