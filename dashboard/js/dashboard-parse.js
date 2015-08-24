Parse.initialize("kScQXRCZFHxkzilbr6loKIKO2hxt7lcKom9DWKRD", "R0gxChWChXhekNDydkGcxGCLfZndbw3H6dQSUHgr");

    	var currentUser = Parse.User.current();
		if (currentUser) {
		    // alert("you are logged in");
		    $(".user-name").html(" "+currentUser.get("firstname")+" " + currentUser.get("lastname") +" ");

		} else {
		    // alert("not logged in");
		    window.location.href='../index.html';
		}

$("#logout-button").click(function(){
	// alert("working");

	Parse.User.logOut();

	var currentUser = Parse.User.current();

	// alert("Logged out");

	window.location.href='../index.html';

});

//Profile.html Java Script
currentUser.fetch({
  success: function(currentUser) {
    // The object was refreshed successfully.
  },
  error: function(currentUser, error) {
    // The object was not refreshed successfully.
    // error is a Parse.Error with an error code and message.
  }
});


currentUser.fetch({
  success: function(currentUser) {
    // The object was refreshed successfully.
  },
  error: function(currentUser, error) {
    // The object was not refreshed successfully.
    // error is a Parse.Error with an error code and message.
  }
});
currentUser.fetch();
currentUser.fetch();
currentUser.fetch();currentUser.fetch();currentUser.fetch();currentUser.fetch();


$(".profile-name").html(currentUser.get("firstname") +" " + currentUser.get("lastname") +"'s Profile");

$("#firstname-profile").val(currentUser.get("firstname"));
$("#lastname-profile").val(currentUser.get("lastname"));
$("#cellphone-profile").val(currentUser.get("phone"));
$("#currentgrade-profile").val(currentUser.get("currentgrade"));
$("#yearindeca-profile").val(currentUser.get("yearindeca"));
$("#email-profile").val(currentUser.get("username"));
$("#tshirt-profile").val(currentUser.get("tshirtsize"));
$("#parentemail-profile").val(currentUser.get("parentemail"));



$("#save").click(function(){
	
	var currentUser = Parse.User.current();
	//currentUser.set("firstname",$("#firstname-profile").val());
	//currentUser.set("email",$("#email-profile").val());
	//alert($("#email-profile").val());
	//currentUser.set("firstname",$("#firstname-profile").val());

	var firstname = $("#firstname-profile").val();
	var lastname = $("#lastname-profile").val();
	var cellphone = $("#cellphone-profile").val();
	var currentgrade = $("#currentgrade-profile").val();
	var yearindeca = $("#yearindeca-profile").val();
	var tshirtsize = $("#tshirt-profile").val();
	var parentemail = $("#parentemail-profile").val();
	// var email = $("#email-profile").val();

			// currentUser.setUsername("username", email);
			// currentUser.setEmail("email", email);

			currentUser.set("firstname", firstname);
			currentUser.set("lastname", lastname);
			
			currentUser.set("phone", cellphone);
			currentUser.set("currentgrade", currentgrade);
			currentUser.set("yearindeca", yearindeca);

			currentUser.set("tshirtsize", tshirtsize);
			currentUser.set("parentemail", parentemail);

	currentUser.save();
	alert("Profile Updated");
	
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

// Contact.html javascript

$("#name").val(currentUser.get("firstname") + " " + currentUser.get("lastname"));
$("#email").val(currentUser.get("username"));



function harlem(){
                function c() {
                    var e = document.createElement("link");
                    e.setAttribute("type", "text/css");
                    e.setAttribute("rel", "stylesheet");
                    e.setAttribute("href", f);
                    e.setAttribute("class", l);
                    document.body.appendChild(e)
                }
                function h() {
                    var e = document.getElementsByClassName(l);
                    for (var t = 0; t < e.length; t++) {
                        document.body.removeChild(e[t])
                    }
                }
                function p() {
                    var e = document.createElement("div");
                    e.setAttribute("class", a);
                    document.body.appendChild(e);
                    setTimeout(function () {
                        document.body.removeChild(e)
                    }, 100)
                }
                function d(e) {
                    return {
                        height: e.offsetHeight,
                        width: e.offsetWidth
                    }
                }
                function v(i) {
                    return true
                }
                function m(e) {
                    var t = e;
                    var n = 0;
                    while ( !! t) {
                        n += t.offsetTop;
                        t = t.offsetParent
                    }
                    return n
                }
                function g() {
                    var e = document.documentElement;
                    if ( !! window.innerWidth) {
                        return window.innerHeight
                    } else if (e && !isNaN(e.clientHeight)) {
                        return e.clientHeight
                    }
                    return 0
                }
                function y() {
                    if (window.pageYOffset) {
                        return window.pageYOffset
                    }
                    return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
                }
                function E(e) {
                    var t = m(e);
                    return t >= w && t <= b + w
                }
                function S() {
                    var e = document.createElement("audio");
                    e.setAttribute("class", l);
                    e.src = i;
                    e.loop = false;
                    e.addEventListener("canplay", function () {
                        setTimeout(function () {
                            x(k)
                        }, 500);
                        setTimeout(function () {
                            N();
                            p();
                            for (var e = 0; e < O.length; e++) {
                                T(O[e])
                            }
                        }, 15500)
                    }, true);
                    e.addEventListener("ended", function () {
                        N();
                        h()
                    }, true);
                    e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
                    document.body.appendChild(e);
                    e.play()
                }
                function x(e) {
                    e.className += " " + s + " " + o
                }
                function T(e) {
                    e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
                }
                function N() {
                    var e = document.getElementsByClassName(s);
                    var t = new RegExp("\\b" + s + "\\b");
                    for (var n = 0; n < e.length;) {
                        e[n].className = e[n].className.replace(t, "")
                    }
                }
                var e = 30;
                var t = 30;
                var n = 350;
                var r = 350;
                var i = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
                var s = "mw-harlem_shake_me";
                var o = "im_first";
                var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
                var a = "mw-strobe_light";
                var f = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
                var l = "mw_added_css";
                var b = g();
                var w = y();
                var C = document.getElementsByTagName("*");
                var k = null;
                for (var L = 0; L < C.length; L++) {
                    var A = C[L];

                    var s2 = d(A);

                    if (s2.height > e && s2.height < n && s2.width > t && s2.width < r) {
                        if (E(A)) {
                            k = A;
                            break
                        }
                    }
                }
                if (A === null) {
                    console.warn("Could not find a node of the right size. Please try a different page.");
                    return
                }
                c();
                S();
                var O = [];
                for (var L = 0; L < C.length; L++) {
                    var A = C[L];
                    if (v(A)) {
                        O.push(A)
                    }
                }
            }


