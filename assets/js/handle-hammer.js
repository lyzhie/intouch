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
    
    // calc margin left
      var delta = margin + e.originalEvent.gesture.deltaX;
      
      // Math.round get the nearest card
      var tmp = Math.round((delta - ulMargin) / ($(".cards ul li").width() + 20));
      if ( delta  >= ulMaxMargin && delta <= ulMargin ) {
      		ul.css( {
		        "margin-left": margin + e.originalEvent.gesture.deltaX
		     } );
      }
      

      var dataValue = $( ".cards ul li:nth-child("+(Math.abs(tmp)+1)+")" ).attr('data-value');

      $("#main-card").removeClass().addClass('main-card');

      // change avatar base on data value
      if (dataValue != "add" && dataValue) {
        $("#main-card .avatar").attr({
          'src': 'upload/avatar/lillie/' + dataValue +'.png',
          'alt': dataValue
        });
      }

      $("#main-card").attr('card-value', dataValue);
      $(".tmpCard").attr('card-value', dataValue);
    
      

      // change card val
      if (dataValue == "add" || !dataValue) {
        $("#main-card").css('display', 'none');
        $('.tmpCard').css('display', 'block');
      } else {
        $("#main-card").css('display', 'block');
        $('.tmpCard').css('display', 'none');
      }

      // END change card val
    } );

    mc.on("hammer.input", function(ev) {
      if(ev.isFinal) {
          var tmpMargin = parseInt( ul.css( "margin-left" ), 10 );
          var tmp = Math.round((tmpMargin - ulMargin) / ($(".cards ul li").width() + 20));
          // console.log(tmp);
          // console.log(ulMargin + tmp * ($(".cards ul li").width() + 20));
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
    
    
    
  })();