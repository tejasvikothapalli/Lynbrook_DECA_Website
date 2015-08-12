Parse.initialize("kScQXRCZFHxkzilbr6loKIKO2hxt7lcKom9DWKRD", "R0gxChWChXhekNDydkGcxGCLfZndbw3H6dQSUHgr");

    	var currentUser = Parse.User.current();
		if (currentUser) {
		    alert("you are logged in");
		    //window.location.href='dashboard.html';

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
