$("#forgot-pass-button").click(function(){
	var email = $("#forgot-email").val();

	Parse.User.requestPasswordReset(email, {
  success: function() {
  alert("success");
  },
  error: function(error) {
    // Show the error message somewhere
    alert("Error: " + error.code + " " + error.message);
  }
});
});