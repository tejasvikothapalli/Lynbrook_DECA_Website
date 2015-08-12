Parse.initialize("kScQXRCZFHxkzilbr6loKIKO2hxt7lcKom9DWKRD", "R0gxChWChXhekNDydkGcxGCLfZndbw3H6dQSUHgr");

    	var currentUser = Parse.User.current();
		if (currentUser) {
		    alert("you are logged in");
		    $(".user-name").html(" "+currentUser.get("firstname")+" " + currentUser.get("lastname") +" ");

		} else {
		    alert("not logged in");
		    window.location.href='../index.html';
		}

$("#logout-button").click(function(){
	alert("working");

	Parse.User.logOut();

	var currentUser = Parse.User.current();

	alert("Logged out");

	window.location.href='../index.html';

});

//Profile.html Java Script

$("#firstname-profile").val(currentUser.get("firstname"));
$("#lastname-profile").val(currentUser.get("lastname"));
$("#cellphone-profile").val(currentUser.get("phone"));
$("#currentgrade-profile").val(currentUser.get("currentgrade"));
$("#yearindeca-profile").val(currentUser.get("yearindeca"));
$("#email-profile").val(currentUser.get("username"));




$("#save").click(function(){
	
	var currentUser = Parse.User.current();
	//currentUser.set("firstname",$("#firstname-profile").val());
	//currentUser.set("email",$("#email-profile").val());
	//alert($("#email-profile").val());
	currentUser.set("firstname",$("#firstname-profile").val());
	currentUser.save();

// 	alert($("#firstname-profile").val() );
// 	//currentUser.save();
	
//   currentUser.save(null, {
//   success: function(currentUser) {
//     // Execute any logic that should take place after the object is saved.
//     alert('Updated object ' + currentUser.id);
//   },
//   error: function(currentUser, error) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and message.
//     alert('Failed to create new object, with error code: ' + error.message);
//   }
// });
	
});


 function reset() {
	// alert("hello");
	var currentUser = Parse.User.current();
	var email = currentUser.get("username");

	Parse.User.requestPasswordReset(email, {
  success: function() {
  alert("An email has been sent to your email address with instructions on how to change your password.");
  },
  error: function(error) {
    // Show the error message somewhere
    alert("Error: " + error.code + " " + error.message);
  }
});
}


