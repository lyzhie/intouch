
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZ5Q4IorCqjW31lCBncvqs7_IGM0r0k0w",
    authDomain: "intouch-a6d96.firebaseapp.com",
    databaseURL: "https://intouch-a6d96.firebaseio.com",
    storageBucket: "intouch-a6d96.appspot.com",
    messagingSenderId: "1028992775415"
  };
  firebase.initializeApp(config);

  // connect databse by ref()
  var database = firebase.database();
  firebase.database().ref('/contact').once('value').then(function(snapshot) {

    var contacts = snapshot.val();


    for(var i=0; i<contacts.length;i++) {
    var item = contacts[i];
    
    var elem = $("#az #contacts-list").append('<li class="alphabetic-divider" id="to'+item.name+'">'+item.name+'</li>');
    for(var j=0;j<item.data.length;j++) {
      var innerItem = item.data[j];
      var htmlcontent = '<li class="list-item list-item-' + innerItem.avatar +'"><a href="' + innerItem.avatar + '.html">';
      for (var k = 0;k<innerItem.group.length; k++) {
        var tmpitem = innerItem.group[k];
        htmlcontent += '<img class="group-pic" src="assets/images/contact/group/'+tmpitem+'.png" alt="'+tmpitem+'">';
      }
      htmlcontent += '<img class="avatar-pic" src="assets/images/contact/avatar/'+innerItem.avatar+'.png" alt="'+innerItem.avatar+'"><div class="name">'+innerItem.name+'</div></a></li>';
      $(elem).append(htmlcontent);
    }
  }
  })

  firebase.database().ref('/datemet').once('value').then(function(snapshot) {

    var contacts = snapshot.val();


    for(var i=0; i<contacts.length;i++) {
    var item = contacts[i];
    
    var elem = $("#datemet .contacts-list-2").append('<li class="alphabetic-divider">'+item.name+'</li>');
    for(var j=0;j<item.data.length;j++) {
      var innerItem = item.data[j];
      var htmlcontent = '<li class="list-item list-item-' + innerItem.avatar +'"><a href="' + innerItem.avatar + '.html">';
      for (var k = 0;k<innerItem.group.length; k++) {
        var tmpitem = innerItem.group[k];
        htmlcontent += '<img class="group-pic" src="assets/images/contact/group/'+tmpitem+'.png" alt="'+tmpitem+'">';
      }
      htmlcontent += '<img class="avatar-pic" src="assets/images/contact/avatar/'+innerItem.avatar+'.png" alt="'+innerItem.avatar+'"><div class="name">'+innerItem.name+'</div></a></li>';
      $(elem).append(htmlcontent);
    }
  }
  })

  firebase.database().ref('/frequency').once('value').then(function(snapshot) {

    var contacts = snapshot.val();


    for(var i=0; i<contacts.length;i++) {
    var item = contacts[i];
    
    var elem = $("#frequency .contacts-list-2").append('<li class="alphabetic-divider">'+item.name+'</li>');
    for(var j=0;j<item.data.length;j++) {
      var innerItem = item.data[j];
      var htmlcontent = '<li class="list-item list-item-' + innerItem.avatar +'"><a href="' + innerItem.avatar + '.html">';
      for (var k = 0;k<innerItem.group.length; k++) {
        var tmpitem = innerItem.group[k];
        htmlcontent += '<img class="group-pic" src="assets/images/contact/group/'+tmpitem+'.png" alt="'+tmpitem+'">';
      }
      htmlcontent += '<img class="avatar-pic" src="assets/images/contact/avatar/'+innerItem.avatar+'.png" alt="'+innerItem.avatar+'"><div class="name">'+innerItem.name+'</div></a></li>';
      $(elem).append(htmlcontent);
    }
  }
  })

  
  
