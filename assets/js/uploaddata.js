(function(){
  getLocalData();
	clickSubmit();
  clickNext();
})();

function getLocalData(){
  var name = localStorage.getItem("Intouch_User_Name");
  var nameArray = name.split(/[ ,]+/);
  var firstName = nameArray[0];
  var lastName = nameArray[1];
  // console.log(firstName);console.log(lastName);
  $('#first-name').val(firstName);
  $('#last-name').val(lastName);
  // console.log("set value");
  var photoUrl = localStorage.getItem("Intouch_User_Photo");
  $('.image-preview').attr('src', photoUrl);
}



function clickSubmit(argument) {
	// body...
	$('.input-upload-file').bind("change keyup", function(event) {
		/* Act on the event */
		$('#submit-img').click();
    console.log('change');
	});
}



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
  function writeUserData(userId, firstname, lastname, imageUrl, occupation, company, phone, email) {
    firebase.database().ref('/user/' + userId).set({
      id: userId,
      firstname: firstname,
      lastname: lastname,
      avatar : {"friend":imageUrl},
      occupation: occupation,
      company: company,
      phone: { Mobile : phone},
      email: { Personal  : email},
    });
  }



  // var userId = Math.floor((Math.random() * 1000) + 5);
  
  

  function clickNext(){
    $('#submit-form').click(function(event) {
      /* Act on the event */
      var userId = 233;
      var firstname = $('#first-name').val();
      var lastname = $('#last-name').val();
      var imageUrl = $('#message').html();
      var occupation = $('#occupation').val();
      var company = $('#company').val();
      var phone = $('#phone').val();
      var email = $('#email').val();

      writeUserData(userId, firstname, lastname, imageUrl, occupation, company, phone, email);
      window.location.href="./pattern.html";
    });
  }