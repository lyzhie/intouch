var contactssfa = [
	{
		"name": "A",
		"data": [
			{
				"name": "Allie Carson",
				"group": ["client"],
				"avatar": "allicec"

			},
			{
				"name": "Aki Tsang",
				"group": ["client"],
				"avatar": "akit"

			},
			{
				"name": "Andy Vanhoose",
				"group": ["favorites","bff"],
				"avatar": "andyv"

			},
			{
				"name": "Asenath Mayo",
				"group": ["friend"],
				"avatar": "asenathm"
			}
		]
	},
	{
		"name": "B",
		"data": [
			{
				"name": "Bailee Campbell",
				"group": ["client"],
				"avatar": "baileec"

			},
			{
				"name": "Bailey Guiterrez",
				"group": ["favorites","model"],
				"avatar": "baileyg"

			},
			{
				"name": "Ben Owens",
				"group": ["friend"],
				"avatar": "beno"
			},
			{
				"name": "Bennie Barrett",
				"group": ["model"],
				"avatar": "bennieb"
			},
			{
				"name": "Blair Hartman",
				"group": ["model"],
				"avatar": "blairh"
			}
		]
	},
	{
		"name": "C",
		"data": [
			{
				"name": "Cassandra",
				"group": ["model"],
				"avatar": "fake"
			
			},
			{
				"name": "Corky",
				"group": ["model"],
				"avatar": "fake"
			
			},
			{
				"name": "Cicero",
				"group": ["model"],
				"avatar": "fake"
			
			},
			{
				"name": "Cecilia",
				"group": ["model"],
				"avatar": "fake"
			
			},
			{
				"name": "Cook",
				"group": ["model"],
				"avatar": "fake"
			
			}
		]
	},
	{
		"name": "D",
		"data": [
			{
				"name": "Dianna",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "E",
		"data": [
			{
				"name": "Eve",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "F",
		"data": [
			{
				"name": "Fiona",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "G",
		"data": [
			{
				"name": "Gregory",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "H",
		"data": [
			{
				"name": "Homer",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "J",
		"data": [
			{
				"name": "Jaina",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "K",
		"data": [
			{
				"name": "Kostas",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "L",
		"data": [
			{
				"name": "Lea",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "M",
		"data": [
			{
				"name": "Michael",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "N",
		"data": [
			{
				"name": "Nick",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "O",
		"data": [
			{
				"name": "Oratio",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "P",
		"data": [
			{
				"name": "Peter",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "Q",
		"data": [
			{
				"name": "Qubert",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "R",
		"data": [
			{
				"name": "Roxanne",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "S",
		"data": [
			{
				"name": "Steve",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "T",
		"data": [
			{
				"name": "Timo",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "U",
		"data": [
			{
				"name": "Ursula",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "V",
		"data": [
			{
				"name": "Vendetta",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "W",
		"data": [
			{
				"name": "Warpath",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "X",
		"data": [
			{
				"name": "Xena",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	},
	{
		"name": "Y",
		"data": [
			{
				"name": "Yrelia",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	}, {
		"name": "Z",
		"data": [
			{
				"name": "Zoltan",
				"group": ["model"],
				"avatar": "fake"
			}
		]
	}
];

$(document).ready(function(){
  swipeGroup();
  contactScroll();
});

// var contactlist = contactlist || {};
// contactlist = (function(){
//   var _letterSections = [];
// 	var _touchStart = 0;
// 	var _scrolled = 0;
// 	var _firstClick = 0; 
//   var _scroller;
  
//   for(var i=0; i<contacts.length;i++) {
//     var item = contacts[i];
    
//     var elem = $("#contacts-list").append('<li class="alphabetic-divider" id="to'+item.name+'">'+item.name+'</li>');
//     for(var j=0;j<item.data.length;j++) {
//       var innerItem = item.data[j];
//       var htmlcontent = '<li class="list-item list-item-' + innerItem.avatar +'"><a href="contacts/' + innerItem.name + '.html">';
//       // $(elem).append('<li class="list-item">');
//       for (var k = 0;k<innerItem.group.length; k++) {
//       	var tmpitem = innerItem.group[k];
//       	htmlcontent += '<img class="group-pic" src="assets/images/contact/group/'+tmpitem+'.png" alt="'+tmpitem+'">';
//       }
//       htmlcontent += '<img class="avatar-pic" src="assets/images/contact/avatar/'+innerItem.avatar+'.png" alt="'+innerItem.avatar+'"><div class="name">'+innerItem.name+'</div></a></li>';
//       $(elem).append(htmlcontent);
//     }
//   }
  

  
  

// })();

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
