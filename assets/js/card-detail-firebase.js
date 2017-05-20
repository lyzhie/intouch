
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZ5Q4IorCqjW31lCBncvqs7_IGM0r0k0w",
    authDomain: "intouch-a6d96.firebaseapp.com",
    databaseURL: "https://intouch-a6d96.firebaseio.com",
    storageBucket: "intouch-a6d96.appspot.com",
    messagingSenderId: "1028992775415"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
  }

  var cardId = $.urlParam("card");
  var id = $.urlParam("id");

  // console.log(name);console.log(id);
  
  firebase.database().ref('/user/'+id).once('value').then(function(snapshot) {

    var user = snapshot.val();

    var cardVal = user.card[cardId];
    console.log(cardVal);

    $('.owner-avatar').attr({
    	'src': 'upload/avatar/'+ user.avatar[cardVal.avatar],
    	'alt': user.firstname + ' ' + user.lastname
    });
    $('.owner-name').html(user.firstname + ' ' + user.lastname);
	$('.occupation').html(user.occupation);
	$('.company').html(user.company);
	if(user.phone&&cardVal.phone){
		$.each(user.phone, function(key, value) {
			for (var i = 0; i < cardVal.phone.length; i++) {
				console.log(cardVal.phone[i]);
				if (key == cardVal.phone[i]) {
					$('.cards-detail-list').append('<li><span>' + key + '</span><p>' + value + '</p></li>');
				}
			};
		});
	};
	if(user.email&&cardVal.email){
		$.each(user.email, function(key, value) {
			for (var i = 0; i < cardVal.email.length; i++) {
				console.log(cardVal.email[i]);
				if (key == cardVal.email[i]) {
					$('.cards-detail-list').append('<li><span>' + key + '</span><p>' + value + '</p></li>');
				}
			};
		});

	};
	if(user.social&&cardVal.social){
		$('.cards-detail-list').append('<li class="divide-line"></li>');
		$.each(user.social, function(key, value) {
			for (var i = 0; i < cardVal.social.length; i++) {
				console.log(cardVal.social[i]);
				if (key == cardVal.social[i]) {
					$('.cards-detail-list').append('<li><a href=\"' + value.link +'\"><span>' + key + '</span><div><img src=\"' + value.icon + '\" alt=\"' + key + '\"><p>' + value.name + '</p></div></a></li>');
				}
			};

			
		});
	}
  
  })

  
 