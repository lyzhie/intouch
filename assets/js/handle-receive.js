(function() {

    // img height
    var tmpHeight = $('.main-card').innerHeight();
    $('.main-card .avatar ').height(tmpHeight);

    // init
    var ul, margin, ulMargin, ulMaxMargin;
    ulMargin = parseInt($(".cards ul").css('margin-left'),10);
    ulMaxMargin = -$(".cards ul li:last-child").index() * ($(".cards ul li").width() + 20) + ulMargin - 10;

    ul = $( ".cards ul" );

    // add listener
    var mc = new Hammer( $( ".cards" )[ 0 ], {
      domEvents: true
    } );
    mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    $( ".cards" ).on( "panstart", function( e ) {
      margin = parseInt( ul.css( "margin-left" ), 10 );
    } );

    $( ".cards" ).on( "panleft panright", function( e ) {


      var delta = margin + e.originalEvent.gesture.deltaX;
      
      // Math.round get the nearest card
      var tmp = Math.round((delta - ulMargin) / ($(".cards ul li").width() + 20));
      if ( delta  >= ulMaxMargin && delta <= ulMargin ) {
          ul.css( {
            "margin-left": margin + e.originalEvent.gesture.deltaX
         } );
      }
     
      // change card val
      
      // END change card val
    } );

    mc.on("hammer.input", function(ev) {
      if(ev.isFinal) {
          var tmpMargin = parseInt( ul.css( "margin-left" ), 10 );
          var tmp = Math.round((tmpMargin - ulMargin) / ($(".cards ul li").width() + 20));
          
          $(ul).animate({
            "margin-left": ulMargin + tmp * ($(".cards ul li").width() + 20)},
            300, function() {
            
          });

        // curve effect 
        $( ".cards ul li:nth-child("+(Math.abs(tmp)-1)+")" ).css({'transform': 'rotate(-20deg) translate(0,60px)','transition': 'all .3s'});
        $( ".cards ul li:nth-child("+(Math.abs(tmp))+")" ).css({'transform': 'rotate(-10deg) translate(0,15px)','transition': 'all .3s'});
        $( ".cards ul li:nth-child("+(Math.abs(tmp)+1)+")" ).css({'transform': 'rotate(0) translate(0,0)','transition': 'all .1s'});
        $( ".cards ul li:nth-child("+(Math.abs(tmp)+2)+")" ).css({'transform': 'rotate(10deg) translate(0,15px)','transition': 'all .3s'});
        $( ".cards ul li:nth-child("+(Math.abs(tmp)+3)+")" ).css({'transform': 'rotate(20deg) translate(0,60px)','transition': 'all .3s'});
          
      }
     });


    // draggable
    $('.receive-card').draggable({
      revert: true,
      start: function(event, ui){
        $(this).addClass('draging')
    },
      stop: function( event, ui ) {
        $(this).removeClass('draging')
      }

    });

    // droppable
    $('.receive-group ul li').droppable({
      tolerance: "pointer",
      drop: function(event, ui){
        var tmpHight = $('.carousel').height();
        $('.carousel').css('height', tmpHight);
        if ($('.item').length > 0 ) {
          $('.active').addClass('dragged');
          if ($('.item').length == 1) {
            $('.carousel-dot').find('.active').remove();
            $('.dragged').remove();
            $('.carousel').html("<div class='empty-page'><p>You havn't received any new card. Go and meet some new friend.</p></div>");
          } else{
            $('.carousel').carousel('next');
            $('.carousel-dot').find('.active').prev('li').remove();
            var timeoutID = window.setTimeout(function(){$('.dragged').remove();}, 1000);
          }
          
        } 
        
      }
      
    });
    cardClick();
    triggerNote();
    
  })();

  // click card func
  function cardClick(){
    $('.card-info-receive').click(function(event) {
      var dataValue = $(this).attr('card-value');
      var dataId = $(this).attr('data-id');
      console.log(dataValue);
      if (dataValue == 'add') {
        window.location.href =  'new_card.html';
      } else {
        
        window.location.href = 'card_detail_1.html?card=' + dataValue + '&id=' + dataId;
      }
    });
  }

  
  function triggerNote(){

    $('.btn-receive-note').click(function(event) {
      $(this).closest('.main-card').addClass('tmp-receive-card');
      $('.tmp-receive-card .btn-reveive').hide();
      $('.tmp-receive-card .card-info-receive').hide();
      $('.tmp-receive-card .input-note').show();
      $('.tmp-receive-card .input-note textarea').focus();
    });
    $('.btn-note-save').click(function(event) {
      $('.tmp-receive-card .btn-reveive').show();
      $('.tmp-receive-card .card-info-receive').show();
      $('.tmp-receive-card .input-note').hide();
      $('.tmp-receive-card .labels-note span').html($('.tmp-receive-card .input-note textarea').val());
      if ($('.tmp-receive-card .labels-note span').html() != "" ){
        $('.tmp-receive-card .labels-note').show();
      } else {
        $('.tmp-receive-card .labels-note').hide();
      }
      $('.tmp-receive-card').removeClass('tmp-receive-card');
    });
    
    if ($('.labels-note span').html() != "" ){
      $('.labels-note').show();
    } else {
      $('.labels-note').hide();
    }
    
  }
